import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experiences">
      <h5>The Skills I have</h5>
      <h2>My Exprience</h2>

      <div class="container experience__container">
        <div class="experience__frontend">
          <h3>Frontend Development</h3>
          <div class="experience__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TailwindCss</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF Frontend*/}
        <div class="experiance__backend">
          <h3>Backend Development</h3>
          <div class="experience__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
