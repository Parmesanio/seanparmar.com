const axios = require("axios");
module.exports = {
  auth0: (req, res) => {
    let redirect_uri =
      process.env.HOST == "localhost"
        ? `http://${req.headers.host}/auth/callback`
        : `https://${req.headers.host}/auth/callback`;
    const payload = {
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri
    };

    function tradeCodeForAccessToken() {
      return axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
        payload
      );
    }

    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(
        `https://${
        process.env.REACT_APP_AUTH0_DOMAIN
        }/userinfo?access_token=${accessToken}`
      );
    }

    function storeUserInfoInDatabase(response) {
      const auth0Id = response.data.sub;
      const db = req.app.get("db");
      return db
        .get_admin_by_auth0_id(auth0Id)
        .then(admin => {
          let { name, picture, email } = response.data;
          if (admin.length) {
            if (admin[0].auth0_id == auth0Id) {
              req.session.admin = admin;
              res.redirect("/");
            } else {
              res.send("You are not authorized.");
            }
          } else {
            return db
              .create_admin([auth0Id, name, email, picture])
              .then(newUser => {
                req.session.admin = newUser;
                res.redirect("/blog/posts");
              })
              .catch(error => {
                console.log("error in db.create_user", error);
                res.status(500).send("Unexpected error");
              });
          }
        })
        .catch(error => {
          console.log("error in db.get_user_by_auth0_id", error);
          res.status(500).send("Unexpected error");
        });
    }

    tradeCodeForAccessToken()
      .then(tradeAccessTokenForUserInfo)
      .then(storeUserInfoInDatabase)
      .catch(error => {
        console.log("error in /auth/callback", error);
        res.status(500).send("Unexpected error");
      });
  }
};
