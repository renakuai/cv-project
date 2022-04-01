//import logo from './logo.svg';
import React, { Component } from "react";
import uniqid from "uniqid";
import './App.css';
import EditableGeneral from "./components/EditableGeneral.js";
import SavedGeneral from "./components/SavedGeneral.js";
import EditableEducation from "./components/EditableEducation.js";
import SavedEducation from "./components/SavedEducation.js";
import EditableExperience from "./components/EditableExperience.js";
import SavedExperience from "./components/SavedExperience.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: 'Susan Rhee',
        email: 'asds@gmail.com',
        phone: '1234232324',
      },
      education: {
        schoolName: 'University of Maryland',
        degree: 'BS in Mechanical Engineering',
        yearStartSchool: '2009',
        yearEndSchool: '2013',
      },
      experience: {
        companyName: '',
        role: '',
        description: '',
        yearStartJob: '',
        yearEndJob: '',
        id: uniqid(),
      },
      experiences: [],
      editableGeneral: false,
      savedGeneral: true,
      editableEducation: false,
      savedEducation: true,
      editableExperience: false,
      savedExperience: true,
    };
  }
  handleInputs = (e) => {
    if (e.target.className === 'general') {
      this.setState({
        ...this.state,
        general: {
        ...this.state.general,
        [e.target.id]: e.target.value,
        },
      })
    }
    else if (e.target.className === 'education') {
      this.setState({
        ...this.state,
        education: {
        ...this.state.education,
        [e.target.id]: e.target.value,
        },
      })
    }
    else if (e.target.className === 'experience') {
      this.setState({
        ...this.state,
        experience: {
        ...this.state.experience,
        [e.target.id]: e.target.value,
        },
      })
    }
  }
  editGeneralInfo = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      savedGeneral: false,
      editableGeneral: true,
    })
  }
  addGeneralInfo = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      general: {
        name: this.state.general.name,
        email: this.state.general.email,
        phone: this.state.general.phone,
      },
      savedGeneral: true,
      editableGeneral: false,
    })
  }
  editEducationInfo = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      savedEducation: false,
      editableEducation: true,
    })
  }
  addEducationInfo = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: {
        schoolName: this.state.education.schoolName,
        degree: this.state.education.degree,
        yearStartSchool: this.state.education.yearStartSchool,
        yearEndSchool: this.state.education.yearEndSchool,
      },
      savedEducation: true,
      editableEducation: false,
    })
  }
  editExperienceInfo = (e) => {
    e.preventDefault();
    const beingEdited = document.getElementById(e.target.id);
    beingEdited.classList.add('hide');
    const alreadyExists = this.state.experiences.filter(item => item.id === e.target.id);
    console.log(alreadyExists);
    this.setState({
      ...this.state,
      experience: {
          companyName: alreadyExists[0].companyName,
          role: alreadyExists[0].role,
          description: alreadyExists[0].description,
          yearStartJob: alreadyExists[0].yearStartJob,
          yearEndJob: alreadyExists[0].yearEndJob,
          id: alreadyExists[0].id,
      },
      clickedSection: e.target.id,
      editableExperience: true,
      savedExperience: true,
    })
  }
  addExperience = (e) => {
    e.preventDefault();
    const beingEdited = document.getElementById(e.target.id);
    beingEdited.classList.remove('hide');
    const alreadyExists = this.state.experiences.filter(item => item.id === this.state.experience.id);
    const restOfArray = this.state.experiences.filter(item => item.id !== this.state.experience.id);
    if (alreadyExists.length === 0){
      this.setState({
        ...this.state,
        experience: {
          companyName: '',
          role: '',
          description: '',
          yearStartJob: '',
          yearEndJob: '',
          id: uniqid(),
        },
        experiences: this.state.experiences.concat(this.state.experience),
        clickedSection: e.target.id,
        savedExperience: true,
        editableExperience: false,
      });
    }
    else {
      this.setState({
        ...this.state,
        experience: {
          companyName: this.state.experience.companyName,
          role: this.state.experience.role,
          description: this.state.experience.description,
          yearStartJob: this.state.experience.yearStartJob,
          yearEndJob: this.state.experience.yearEndJob,
          id: uniqid(),
        },
        experiences: restOfArray.concat(this.state.experience),
        clickedSection: e.target.id,
        savedExperience: true,
        editableExperience: false,
      });
    }
  }
  addAnotherExperience = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      experience: {
          companyName: '',
          role: '',
          description: '',
          yearStartJob: '',
          yearEndJob: '',
          id: uniqid(),
      },
      clickedSection: '',
      savedExperience: true,
      editableExperience: true,
    })
  }
  render() {
    const {general, education, experience} = this.state
    return (
      <div className = "cv">
        <form>
          {this.state.savedGeneral ? <SavedGeneral general={general} editGeneralInfo={this.editGeneralInfo}/> : null}

          {this.state.editableGeneral ? <EditableGeneral general={general} handleInputs={this.handleInputs} addGeneralInfo={this.addGeneralInfo} editGeneralInfo={this.editGeneralInfo} /> : null}

          {this.state.savedEducation ? <SavedEducation education={education} editEducationInfo={this.editEducationInfo}/> : null}

          {this.state.editableEducation ? <EditableEducation education={education} handleInputs={this.handleInputs} addEducationInfo={this.addEducationInfo} editEducationInfo={this.editEducationInfo} /> : null}

          {this.state.savedExperience ? <SavedExperience experience={experience} experiences={this.state.experiences} clickedSection={this.state.clickedSection} editExperienceInfo={this.editExperienceInfo}/> : null}

          {this.state.editableExperience ? <EditableExperience experience={experience} experiences={this.state.experiences} clickedSection={this.state.clickedSection} handleInputs={this.handleInputs} addExperience={this.addExperience} editExperienceInfo={this.editExperienceInfo} /> : null}

          <button type="addexperience" id="addAnotherExperience" onClick={this.addAnotherExperience}>Add Experience</button>
        </form>
      </div>
    );
  }
}
export default App;

//general: name, email, phone
//education: school name, degree, date of graduation
//experience: co name, position, tasks, date from date to