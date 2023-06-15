import React, { Fragment, useRef } from "react";
import MainCanvas from "../components/MainCanvas";
import NavigationBar from "../components/NavigationBar";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rya2d9q",
        "template_0ta55f5",
        form.current,
        "mHSFBxvK-z0zwkNc6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <h1>Let's get in touch</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-top">
            <div className="contact-block">
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="contact-block">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
          </div>
          <div className="contact-bottom">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input className="contact-send" type="submit" value="Send" required />
        </form>
      </MainCanvas>
    </Fragment>
  );
}

export default Contact;
