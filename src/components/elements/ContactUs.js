import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sujbtpc', 'template_wqgn15d', form.current, 'user_QwNs4Y9kTCa0OvsSp4L3R')
      .then((result) => {
          alert('Thanks! We\'ll be in touch shortly');
      }, (error) => {
          alert('Sorry, an error has occurred. Please try again later');
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p><input type="text" name="first-name" placeholder="Name" required/></p>
      <p><input type="email" name="your-email" placeholder="Email" required/></p>
      <p><textarea name="your-message" placeholder="Message" required/></p>
      <p><input type="submit" value="Send" /></p>
    </form>
  );
};