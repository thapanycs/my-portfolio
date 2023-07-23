import React from "react";
import "./About.css";
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>0 Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>clients</h5>
              <small>0+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>2 Completed </small>
            </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime temporibus sed accusantium maiores distinctio accusamus! Necessitatibus, dignissimos quis reiciendis eos magni nam provident, molestiae itaque ratione veritatis corrupti excepturi?
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          

        </div>
      </div>
    </section>
  );
};

export default About;
