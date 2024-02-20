import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Prathik
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div class="footer__social">
        <a href="https://github.com/Prathikshe/">
          <BsGithub />
        </a>
        <a href="www.linkedin.com/in/prathik-p-Shet101">
          <BsLinkedin />
        </a>
        <a href="https://wa.me/918310100497">
          <BsWhatsapp />
        </a>
        <a href="https://ig.me/m/prathikshet">
          <BsInstagram />
        </a>
      </div>
      <div className="copy__right">
        <small>&copy;Prathik Shet's portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
