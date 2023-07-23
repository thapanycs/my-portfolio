import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio1.jpg";
import IMG3 from "../../assets/portfolio1.jpg";
import IMG4 from "../../assets/portfolio1.jpg";
import IMG5 from "../../assets/portfolio1.jpg";
import IMG6 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title1" />
          </div>
          <h3>This is title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thapan_ycs"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/thapan_ycs"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
