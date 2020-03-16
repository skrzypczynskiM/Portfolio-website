import React, { useRef, useState, useEffect } from "react"
import contactStyles from "./contactForm.module.scss"

const ContactForm = () => {
  const name = useRef(null)
  const email = useRef(null)
  const subject = useRef(null)
  const message = useRef(null)
  const form = useRef(null)

  const refs = { name, email, subject, message }

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFocus = e => {
    const inputRef = e.currentTarget.name
    //if input is invalid make
    if (!errors[inputRef]) {
      refs[inputRef].current.checked = !refs[inputRef].current.checked
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = "Email is required"
    }
    if (!/\S+@\S+\.\S+/.test(values.email) && values.email.length > 0) {
      errors.email = "Enter a valid email address"
    }

    if (!values.message) {
      errors.message = "Message is required"
    }
    if (values.message.length < 10 && values.message.length !== 0) {
      errors.message = "Your message needs minimum 10 characters"
    }
    return errors
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = form.current

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("submitted")
    }
  }, [errors])

  return (
    <div className={contactStyles.contactPage}>
      <div className={contactStyles.vertically}>
        <div className={contactStyles.myCont}>
          <h1>Get in touch</h1>
          <p className={contactStyles.contactInfo}>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the awesome form below.
          </p>
          <div className={contactStyles.form}>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              ref={form}
            >
              <input type="hidden" name="bot-field" />
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Send</button>
            </form>
            {/* <form
              name="contact"
              action="POST"
              method="POST"
              data-netlify="true"
              netlify
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              // noValidate
              // autoComplete="off"
              ref={form}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              {/* <input type="hidden" name="form-name" value="Contact Form" /> */}
            {/* <ul className={contactStyles.box}>
                <li>
                  <input type="hidden" name="bot-field" />
                </li>
                <li>
                  <input type="hidden" name="form-name" value="contact" />
                </li>
                <ul className={contactStyles.container_row}>
                  <li>
                    <input
                      type="checkbox"
                      id="btnControl"
                      className={contactStyles.btnControl}
                      ref={name}
                      name="checkbox0"
                    />
                    <div className={contactStyles.btn}>
                      <span>
                        <span>
                          <span>
                            <input
                              type="search"
                              name="name"
                              placeholder="Name"
                              id="name"
                              value={values.name}
                              onFocus={handleFocus}
                              onBlur={handleFocus}
                              onChange={handleChange}
                              autoComplete="off"
                            ></input>
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="btnControl"
                      className={contactStyles.btnControl}
                      ref={email}
                      name="checkbox1"
                    />

                    <div
                      className={`${contactStyles.btn} ${errors.email &&
                        contactStyles.errorBorder}`}
                    >
                      <span>
                        <span>
                          <span>
                            <input
                              type="search"
                              name="email"
                              placeholder="Email"
                              id="email"
                              className={`${errors.email && "inputError"}`}
                              value={values.email}
                              onFocus={handleFocus}
                              onBlur={handleFocus}
                              onChange={handleChange}
                              autoComplete="off"
                            />

                            {errors.email && (
                              <p className={contactStyles.errorText}>
                                {errors.email}
                              </p>
                            )}
                          </span>
                        </span>
                      </span>
                    </div>
                    {errors.email && (
                      <p className={contactStyles.errorText}>{errors.email}</p>
                    )}
                  </li>
                </ul>

                <li>
                  <input
                    type="checkbox"
                    id="btnControl"
                    className={contactStyles.btnControl}
                    ref={subject}
                    name="checkbox2"
                  />
                  <div className={contactStyles.btn}>
                    <span>
                      <span>
                        <span>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            id="subject"
                            value={values.subject}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            onChange={handleChange}
                            autoComplete="off"
                          />
                        </span>
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="btnControl"
                    className={contactStyles.btnControl}
                    ref={message}
                    name="checkbox3"
                  />
                  <div
                    className={`${contactStyles.btn} ${errors.message &&
                      contactStyles.errorBorder}`}
                  >
                    <span>
                      <span>
                        <span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={values.message}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            onChange={handleChange}
                          />
                        </span>
                      </span>
                    </span>
                  </div>
                  {errors.message && (
                    <p className={contactStyles.errorText}>{errors.message}</p>
                  )}
                </li>
                <li>
                  <div className={contactStyles.btn}>
                    <button type="submit" className={contactStyles.submitBtn}>
                      <span>Send</span>
                    </button>
                  </div>
                </li>
              </ul>
            </form>{" "} */}
            {/* }  */}
          </div>

          <div className={contactStyles.entrySocial}>
            <div className={contactStyles.forMobile}>
              <h3>Wanna know more about me?</h3>
              <p className={contactStyles.moreInfo}>
                Worry not! You can always catch me on Messenger, LinkedIn or
                GitHub.
              </p>
            </div>

            <div className={contactStyles.container_other}>
              <div>Follow me</div>

              <div className={contactStyles.messanger}>
                <a
                  href="http://m.me/100004312268311"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i></i>
                  Messanger
                </a>
              </div>

              <div className={contactStyles.linkedin}>
                <a
                  href="https://www.linkedin.com/in/michał-skrzypczyński-7b089b1a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i></i>
                  Linkedin
                </a>
              </div>

              <div className={contactStyles.github}>
                <a
                  href="https://github.com/justFlow5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
