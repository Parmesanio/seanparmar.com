import React from "react";
import axios from "axios";
const ContactDesktop = props => {
  //NODEMAILER
  //reset
  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios.post("/send", { name, email, message }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  return (
    <div className="contact-desktop">
      <form id="contact-form" onSubmit={event => event.preventDefault()}>
        <h1>Get In Touch!</h1>
        <input id="name" type="text" placeholder="Full Name" required />
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          required
        />
        <textarea id="message" placeholder="Message" required />
        <button onClick={e => handleSubmit(e)}>Contact Sean</button>
      </form>
    </div>
  );
};

export default ContactDesktop;