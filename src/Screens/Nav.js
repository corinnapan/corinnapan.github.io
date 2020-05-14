import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  routes = () => (
    <div className='navigation'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/aboutme'>About Me</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contactme'>Contact Me</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
  
    </div>
  )
  render() {
    return (
      <div className="routes">
        {this.routes()}
      </div>
    )
  }
}
