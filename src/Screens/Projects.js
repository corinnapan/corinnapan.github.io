import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {

      Projects: [
        {
          name: 'Image of the Day',
          image: 'https://i.imgur.com/kwFdoS6.png',
          link: 'https://quirky-ptolemy-caba97.netlify.app/',
          description: 'Created "Imager," an image generator web application. Created with HTML | CSS | Vanilla JavaScript | Unsplash API',
          github: 'https://github.com/corinnapan/Project-1'
        },
        {
          name: 'Instagraam',
          image: 'https://i.imgur.com/CZXNHyn.png',
          link: 'http://instagraam-mockup.surge.sh/',
          description: 'Created "Instagraam," a basic functional mock-up of Instagram. Used React.js',
          github: 'https://github.com/corinnapan/Instagraam'
        },
        {
          name: 'The Survival Kit App',
          image: 'https://i.imgur.com/sHTNS9s.png',
          link: 'https://survival-kit-app.netlify.app/',
          description: 'Collaborated on a group project called the "The Survival Kit Lab." Used material-UI',
          github: 'https://github.com/corinnapan/recording-umbrella'
        }

      ]

    }
  }

  getProjects = () => {
    return this.state.Projects.map((project) => {
      return (
        <div>
          <div className="project">
          <div>
            {project.name}
          </div>
          <a href={project.link}>
            <img src={project.image} />
          </a>
          <div>
            {project.description}
          </div>
          <a href={project.github}>
            <button>Github</button>
          </a>
        </div>
        </div >
      )
  })
}
render() {
  return (

    <div>
      <h1>Here are three projects that I worked on while in my programming bootcamp.</h1>
      {this.getProjects()}
    </div>
  )
}
}
