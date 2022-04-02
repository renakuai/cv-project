//import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Personal from './components/Personal.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';

class App extends Component {
  render() {
    return (
      <div className="cv">
        <div className="PageTitle">Your CV Application</div>
        <Personal />
        <Education />
        <Experience />
      </div>
    );
  }
}
export default App;

//general: name, email, phone
//education: school name, degree, date of graduation
//experience: co name, position, tasks, date from date to