import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { message } from "antd";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lzf8zmd",
      "template_4y362p6",
      form.current,
      "vmAk0yxbH10CVioCn"
    );

    e.target.reset();
    message.success("Message has been sent");

  };

  return (
    <div className="Contact_wrapper">
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            We are always out there to help you! Fill out the form given below
            and get a reply from us within 2 business days.
          </p>
          <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" name="myname" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="What brings you here?"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
