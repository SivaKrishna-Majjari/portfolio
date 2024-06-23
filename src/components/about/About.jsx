import React from 'react'
import './about.css'
import ME from '../../assets/about-me.JPG'
import { FaAward } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>
            </article>
            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p> A passionate software developer and tech enthusiast, driven to build innovative and
            user-friendly applications that solve real-world problems. Skilled in HTML, CSS, SCSS,
            JavaScript, TypeScript, Angular, React, Node.js, and SQL with a strong understanding
            of agile methodologies and version control tools. Eager to learn new technologies and
            collaborate with others to create great products. Seeking an opportunity to showcase
            my skills and contribute to the success of an organization, while also advancing my career goals.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About