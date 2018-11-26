const config        = require('./config'),
      nodemailer    = require('nodemailer');

//Nodemailer Transport
var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: config.USER,
      pass: config.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
module.exports = {

    send: (req, res) => {
        var name = req.body.name
        var email = req.body.email
        var message = req.body.message
        var content = `
            <header style="background: #282c34; height: 50px;"></header>
            <div style="min-height: 300px; position: absolute; top: 50px; left: 0; right: 0; bottom: 0; background: #282c34; color: #FB8261; padding: 10px;">
                <h1>Name: ${name}</h1>
                \n <p style="color: #FB8261;">Email: \n ${email}</p>
                \n <p>Message: \n ${message}</p>
            </div>
        `
        
    
        var mail = {
        from: name,
        to: config.USER,  //Change to email address that you want to receive messages on
        subject: "New Message from SeanParmar.com",
        text: content,
        html: `${content}`
        }
    
        transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
            msg: 'fail'
            })
        } else {
            res.json({
            msg: 'success'
            })
        }
        })}
}