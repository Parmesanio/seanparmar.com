require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      axios = require('axios'),
      session = require('express-session'),
      cloudinary = require('cloudinary'),
      middleware = require('./middleware'),
      nC = require('./controllers/nodemailer'),
      bC = require('./controllers/blogController'),
      aC = require('./controllers/authController'),
      eC = require('./controllers/expController'),
      app = express();

// Middleware
app.use(bodyParser.json());
app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
      }
}))
app.use(express.static(`${__dirname}/../build`))
massive(process.env.HOST == 'localhost' ? process.env.TEST_CONNECTION_STRING : process.env.CONNECTION_STRING).then(db => {
      app.set('db', db);
      console.log('DB Set');
}).catch(err => console.log('Err in Massive', err));
// Auth0 Endpoint
app.get(`/auth/callback`, aC.auth0);
// GET SESSION
app.get('/api/admin-data', (req, res) => {
      res.json(req.session.admin);
});
//DESTROY SESSION
app.post('/api/admin-data', (req, res) => {
      req.session.destroy();
      res.send();
})

// Blog Endpoints
app.get('/admin/blog/posts', bC.get_posts)
app.post('/admin/blog/posts', middleware.authChecker, bC.create_post)
app.put('/admin/blog/posts/:id', middleware.authChecker, bC.edit_post)
app.delete('/admin/blog/:name/posts/:id', middleware.authChecker, bC.delete_post)

// Experience Endpoints
app.get('/admin/experiences', eC.get);

// Nodemailer Endpoint
app.post('/send', nC.send);

// Cloudinary Endpoint https://www.joshborup.com/blog
app.get('/api/upload', middleware.authChecker, (req, res) => {
      const timestamp = Math.round((new Date()).getTime() / 1000);
      const api_secret = process.env.CLOUDINARY_API_SECRET;
      const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);
      const payload = {
            signature: signature,
            timestamp: timestamp
      };
      res.json(payload);
})

const path = require('path')
app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'));
})
// -------------- ENDPOINTS END
const PORT = 4000;
app.listen(PORT, () => console.log(`Personal Website running on port ${PORT}`));