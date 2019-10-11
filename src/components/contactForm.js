import React from "react"
import contactStyles from "./layout.module.scss"

const ContactForm = () => {
  return (
    <div id={contactStyles.contact}>
      <h3>Get in touch</h3>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <input type="text" name="name" placeholder="Name" id="name" />
        <input type="email" name="email" placeholder="Email" id="email" />
        <input type="text" name="subject" placeholder="Subject" id="subject" />
        <textarea name="message" id="message" placeholder="Message" rows="5" />
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  )
}

export default ContactForm
