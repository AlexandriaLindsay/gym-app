import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sujbtpc', 'template_wqgn15d', form.current, 'user_QwNs4Y9kTCa0OvsSp4L3R')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(err) {
        console.log('FAILED...', err);
     });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};