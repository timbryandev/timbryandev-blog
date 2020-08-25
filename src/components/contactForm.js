import React from "react"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    return (
      <section id="contact">
        <h2>
          <span className="fas fa-at" aria-hidden="true"></span> Contact
        </h2>
        <p>
          Use the form below to get in touch. Alternatively, you can send an
          email directly to{" "}
          <a href="mailto:hi@timbryan.dev" title="Send Tim an email">
            hi@timbryan.dev
          </a>
          .
        </p>

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/meqrploz"
          method="POST"
        >
          <label htmlFor="name">
            <span className="sr-only" role="none">
              Name:
            </span>
            <input
              id="name"
              required
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </label>
          <label htmlFor="email">
            <span className="sr-only" role="none">
              Email:
            </span>
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </label>
          <br />
          <label htmlFor="message">
            <span className="sr-only" role="none">
              Message:
            </span>
            <textarea
              required
              name="message"
              placeholder="Type your Message"
              rows="6"
            ></textarea>
          </label>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="button submit" type="submit">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
