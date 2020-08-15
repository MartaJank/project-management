import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"; 

import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/tasks/:taskId" component={TaskDetails} />
      </Switch>
    </div>
  );
}

export default App;