import React from 'react'
import './contact.css'
import { FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {

  const sendEmail = () => {

  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:sivakrishna.majjari@gmail.com" target="_blank">Send Mail</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/+919908752711" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <LiaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/sivakrishnamajjari/" target="_blank">Connect</a>
          </article>
        </div>

        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact