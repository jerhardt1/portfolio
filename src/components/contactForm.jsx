import React, { Component } from "react";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <h1 className="contact__header">Contact</h1>
        <p className="contact__text">
          I would be happy hearing from you. Also, any feedback is highly
          appreciated!
        </p>
        <form className="contact__form">
          <input type="text" name="name" placeholder="Name" id="name" />
          <input type="email" placeholder="Email" name="email" id="email" />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="contact__form__button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
