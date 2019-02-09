import React, { useState } from 'react';
import axios from "axios";

const ContactForm = () => {
    //NODEMAILER
    const name = useFormInput('');
    const email = useFormInput('');
    const message = useFormInput('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, message);

        axios.post("/send", { name, email, message }).then(response => {
            if (response.data.msg === "success") {
                alert("Message Sent.");
            } else if (response.data.msg === "fail") {
                alert("Message failed to send.");
            }
        });
    };
    return (
        <form id="contact-form" onSubmit={event => event.preventDefault()}>
            <h1>Inquiries</h1>
            <input id="name" type="text" placeholder="Full Name" {...name} required />
            <input
                id="email"
                type="email"
                placeholder="example@email.com"
                {...email}
                required
            />
            <textarea id="message" placeholder="Message" {...message} required />
            <button onClick={e => handleSubmit(e)}>Contact Sean</button>
        </form>
    );
}

export default ContactForm;

// Form Hook
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    };
}