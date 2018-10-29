const axios             = require('axios');
module.exports = {
    auth0: (req, res) => {
        console.log('/auth/callback fired');
        
        const payload = {
          client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          code: req.query.code,
          grant_type: 'authorization_code',
          redirect_uri: `http://${req.headers.host}/auth/callback`
        };
      
        function tradeCodeForAccessToken() {
          return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
        }
      
        function tradeAccessTokenForUserInfo(accessTokenResponse) {
          const accessToken = accessTokenResponse.data.access_token;
          return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`);
        }
      
        function storeUserInfoInDatabase(response) {
          const auth0Id = response.data.sub;
          const db = req.app.get('db');
          return db.get_admin_by_auth0_id(auth0Id).then(admin => {
              if (admin[0].auth0id == auth0Id) {
                  let { name, picture, email } = response.data
                        if (admin.length) {
                        req.session.admin = admin;
                        res.redirect('/');
                        } else {
                        return db.create_admin([auth0Id, name, email, picture]).then(newUser => {
                            req.session.admin = newUser;
                            res.redirect('/');
                        }).catch(error => {
                            console.log('error in db.create_user', error);
                            res.status(500).send('Unexpected error');
                        });
                    }
                } else {
                    // isLoggedIn = false;
                    res.redirect('/admin/login');  
                }
                }).catch(error => {
                    console.log('error in db.get_user_by_auth0_id', error);
                    res.status(500).send('Unexpected error');
                });
            }
            
        tradeCodeForAccessToken()
        .then(tradeAccessTokenForUserInfo)
        .then(storeUserInfoInDatabase)
        .catch(error => {
          console.log('error in /auth/callback', error);
          res.status(500).send('Unexpected error');
        });
      }
}