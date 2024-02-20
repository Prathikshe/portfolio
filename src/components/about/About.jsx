import React from "react";
import "./about.css";
import Me from "../../assets/4SU18CS061.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div class="container about__container">
        <div class="about__me">
          <div class="about__me-image">
            <img src={Me} alt="About about__me-image" />
          </div>
        </div>

        <div class="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>More than 20+</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus sit facilis ullam voluptatum nostrum neque eveniet
            nihil itaque, facere quam explicabo corporis accusantium.
            Aspernatur, possimus facere omnis ex minima rerum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
