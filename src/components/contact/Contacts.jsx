import React from "react";
import "./contact.css";
import { CgMail } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eq3wwof",
        "template_u26aquu",
        form.current,
        "8RAqFWvEWN28gyOvo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CgMail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>prathikpshet21@gmail.com</h5>
            <a href="mailto:prathikpshet21@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icons" />
            <h4>Instagram</h4>
            <h5>prathikshet</h5>
            <a href="https://ig.me/m/prathikshet" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icons" />
            <h4>WhatsApp</h4>
            <h5>8310100497</h5>
            <a href="https://wa.me/918310100497" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Fullname" required />
          <input type="email" name="email" placeholder="Your Mail" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
