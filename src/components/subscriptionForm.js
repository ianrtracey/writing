import React from "react"
import { setSubscribed } from "../utils/storage"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

export default class SubscriptionForm extends React.Component {
  state = {
    email: "",
    isSubmitted: false,
    disabled: false,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.email.length < 1) {
      return
    }
    this.setState({
      disabled: true,
    })

    const form = event.target
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          email: this.state.email,
        }),
      })
      this.setState({
        isSubmitted: true,
      })
      setSubscribed()
    } catch (e) {
      this.setState({
        disabled: false,
      })
    }
  }

  render() {
    const { disabled, isSubmitted } = this.state
    return (
      <div>
        {isSubmitted ? (
          <p className="f4 tc mt2">You're amazing 🙌</p>
        ) : (
          <div>
            <p className="lh-copy pa0 ma0 black-70">
              You will only get an email when I write something new
            </p>
            <form
              name="subscription"
              method="post"
              action="/subscribe"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="measure center"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="mt3">
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-washed-blue  hover-black-80 w-100"
                  type="email"
                  name="email"
                  placeholder="youremail@here.com"
                  id="email-address"
                  onChange={this.handleInputChange}
                  disabled={disabled}
                />
              </div>
              <div className="pv3">
                <input
                  className="b fr ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Subscribe"
                  disabled={disabled}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}
