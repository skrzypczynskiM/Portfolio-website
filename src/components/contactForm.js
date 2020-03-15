import React, { useRef, useState, useEffect } from "react"
import contactStyles from "./contactForm.module.scss"

const ContactForm = () => {
  const name = useRef(null)
  const email = useRef(null)
  const subject = useRef(null)
  const message = useRef(null)

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
      errors.message = "Your message need minimum 10 characters"
    }
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values))
    e.currentTarget.reset()
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
              noValidate
              autoComplete="off"
            >
              <ul className={contactStyles.box}>
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
                            rows="5"
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
            </form>
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
