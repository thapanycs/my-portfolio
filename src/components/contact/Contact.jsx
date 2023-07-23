import React from "react";
import "./Contact.css";
import {MdOutlineMail} from 'react-icons/md'
import {ImTwitter} from 'react-icons/im'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2rbuxpd', 'template_3htoc4d', form.current, 'M5_KzZH_O40Q4O1wN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>saithapan01@gmail.com</h5>
            <a href="mailto:saithapan01@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <ImTwitter className="contact__option-icon"/>
            <h4>Twitter</h4>
            <h5>the_hayagriva</h5>
            <a href="https://twitter.com/the_hayagriva" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 ***** **897</h5>
            <a href="https://api.whatsapp.com/send?phone=8309421897" target="_blank">Send a message</a>
          </article>

        </div>
{/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
