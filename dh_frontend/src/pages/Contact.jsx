import React from "react";
import Wrapper from "../assets/wrappers/ContactWrap";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="section-title">Contact Me</h2>
      <p className="section-description">
        Feel free to reach out to me using the form below or via email.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
