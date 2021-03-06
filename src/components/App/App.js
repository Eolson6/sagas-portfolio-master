import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Projects from '../Projects/Projects.js';
import ProjectsList from '../ProjectsList/ProjectsList.js';
import ProjectsCard from '../ProjectsCard/ProjectsCard.js';
import AdminPage from '../AdminPage/AdminPage.js';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projectsList" component={ProjectsList} />
          <Route exact path="/projectscard" component={ProjectsCard} />
          <Route exact path="/adminpage" component={AdminPage} />
          {/* imported project component to dispaly on dom */}
          <Projects />
        </div>
      </Router>
    );
  }
}

export default App;
