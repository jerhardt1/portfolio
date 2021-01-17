import React, { Component } from "react";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

class ContactForm extends Component {
  state = {
    data: { name: "", subject: "", email: "", message: "" },
    errors: {},
    loading: false,
  };

  schema = {
    name: Joi.string().required().label("Name"),
    subject: Joi.label("subject"),
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message"),
  };

  validate = () => {
    const options = { abortEarly: true };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item in errors.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input.name, input.value);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.sendEmail();
  };

  sendEmail = () => {
    const { data } = this.state;
    const templateParameters = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    this.setState({ loading: true });
    emailjs
      .send(
        "service_ekvqer6",
        "template_6rpdljy",
        templateParameters,
        "user_1r3xLWouwndsykvbF13Zm"
      )
      .then(
        (result) => {
          toast.success("Message has been successfully send. Thank you!");
          this.setState({ loading: false });
        },
        (error) => {
          toast.error("Oops! Something went wrong...");
          this.setState({ loading: false });
        }
      );
  };

  getButtonText = () => {
    const { loading } = this.state;

    return loading ? "Sending..." : "Send";
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div className="contact">
        <h1 className="contact__header">Contact</h1>
        <p className="contact__text">
          I would be happy hearing from you. Also, any feedback is highly
          appreciated!
        </p>
        <form className="contact__form">
          {errors &&
            Object.entries(errors).map((error) => (
              <div className="contact__form__error">
                <span>{error[1]}.</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
              </div>
            ))}
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={data.name}
            onChange={this.handleChange}
          />

          <input
            type="email"
            value={data.email}
            placeholder="Email"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            value={data.subject}
            name="subject"
            id="subject"
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            value={data.message}
            placeholder="Message"
            id="message"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <div className="row row--start row--align-center loader">
            <button
              disabled={this.validate() || loading}
              type="submit"
              className="contact__form__button"
              onClick={this.handleSubmit}
            >
              {this.getButtonText()}
            </button>
            {loading && (
              <Loader
                color="#ffffff"
                type={"TailSpin"}
                height={30}
                width={30}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
