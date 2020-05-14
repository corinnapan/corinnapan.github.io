import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Intro from '../Screens/Intro'
import AboutMe from '../Screens/AboutMe'
import Projects from '../Screens/Projects'
import ContactMe from '../Screens/ContactMe'
import Resume from '../Screens/Resume'


export default class Index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Intro {...props}
            />}>
          </Route>
          <Route
            exact
            path='/aboutme'
            render={props => <AboutMe {...props}
            />}>
          </Route>
          <Route
            exact
            path='/projects'
            render={props => <Projects {...props}
            />}>
          </Route>
          <Route
            exact
            path='/contactme'
            render={props => <ContactMe {...props}
            />}>
          </Route>
          <Route
            exact
            path='/resume'
            render={props => <Resume {...props}
            />}>
          </Route>


        </Switch>
      </div>
    )
  }
}
