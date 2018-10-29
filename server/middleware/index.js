module.exports = {
    authChecker: (req, res, next) =>  {
        if(req.session.admin) {
            console.log('fired');
            next();
        } else {
            console.log('failed');
           res.redirect("/");
        }
    }
}