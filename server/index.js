require('dotenv').config();
const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      axios         = require('axios'),
      session       = require('express-session'),
      nC            = require('./controllers/nodemailer'),
      bC            = require('./controllers/blogController'),
      aC            = require('./controllers/authController'),
      app = express();

app.use(bodyParser.json());
app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
      }
}))
massive(process.env.CONNECTION_STRING).then(db => {
      app.set('db', db);
      console.log('DB Set');
}).catch(err => console.log('Err in Massive'));

// -------------- ENDPOINTS 

// Auth0 Endpoint
app.get(`/auth/callback`, aC.auth0);
  //GET SESSION
app.get('/api/admin-data', (req, res) => {
      res.json(req.session.admin);
});

// Blog Endpoints
app.get('/admin/blog/posts', bC.get_posts)
// app.get('/admin/blog/posts/:id', )
app.post('/admin/blog/posts', bC.create_post)
app.put('/admin/blog/posts/:id', bC.edit_post)
app.delete('/admin/blog/posts/:id', bC.delete_post)

// Nodemailer Endpoint
app.post('/send', nC.send);

const PORT = 4000;
app.listen(PORT, () => console.log(`Personal Website running on port ${PORT}`));