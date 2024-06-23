import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project-thumbnails/project-1.jpg'

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "My first Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 2,
    image: IMG1,
    title: "My second Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 3,
    image: IMG1,
    title: "My third Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 4,
    image: IMG1,
    title: "My fourth Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 5,
    image: IMG1,
    title: "My fifth Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 6,
    image: IMG1,
    title: "My sixth Project name",
    github: "https://github.com",
    demo: "https://google.com"
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projetcs</h2>
      <div className="container projects__container">
        {
          projectsData.map(({ id, image, title, github, demo }) => {
            return (
              <article className="projects__item" key={id}>
                <div className="projects__item-image">
                  <img src={image} alt="thumbnail" />
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                  <a href={github} className="btn" target='_blank'>GitHub</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Projects