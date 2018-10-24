const express       = require('express'),
      bodyParser    = require('body-parser'),
      nC            = require('./controllers/nodemailer'),
      app = express();

app.use(bodyParser.json());

// -------------- ENDPOINTS 

// Auth0 Endpoint
// app.get('/auth/callback', )

// Blog Endpoints
// app.get('/admin/blog/posts', )
// app.get('/admin/blog/posts/:id', )
// app.post('/admin/blog/posts', )
// app.put('/admin/blog/posts/:id', )
// app.delete('/admin/blog/posts/:id', )

// Nodemailer Endpoint
app.post('/send', nC.send);

const PORT = 4000;
app.listen(PORT, () => console.log(`Personal Website running on port ${PORT}`));