import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experience: {
        companyName: '',
        role: '',
        description: '',
        jobStart: '',
        jobEnd: '',
        edit: false,
        expId: uniqid(),
      },
      experiences: [],
    }
  }
  recordInputs = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        [e.target.id]: e.target.value,
      }
    })
  }
  edit = (e) => {
    e.preventDefault();
    const findIndex = this.state.experiences.findIndex(exp => exp.expId === e.target.id);
    const sliceBefore = this.state.experiences.slice(0, findIndex);
    const sliceAfter = this.state.experiences.slice(findIndex + 1);
    this.setState({
      ...this.state,
      experience: {
        companyName: this.state.experiences[findIndex].companyName,
        role: this.state.experiences[findIndex].role,
        description: this.state.experiences[findIndex].description,
        jobStart: this.state.experiences[findIndex].jobStart,
        jobEnd: this.state.experiences[findIndex].jobEnd,
        edit: true,
        expId: this.state.experiences[findIndex].expId,
      },
    }, () =>
        this.setState({
          ...this.state,
          experiences: sliceBefore.concat(this.state.experience, sliceAfter)
    }))
  }
  delete = (e) => {
    const findIndex = this.state.experiences.findIndex(exp => exp.expId === e.target.id);
    const sliceBefore = this.state.experiences.slice(0, findIndex);
    const sliceAfter = this.state.experiences.slice(findIndex + 1);
    this.setState({
      ...this.state,
      experiences: sliceBefore.concat(sliceAfter),
    })
  }
  add = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      experience: {
        companyName: '',
        role: '',
        description: '',
        jobStart: '',
        jobEnd: '',
        edit: true,
        eduId: uniqid(),
      },
    })
  }
  save = (e) => {
    e.preventDefault();
    if (this.state.experiences.findIndex(exp => exp.expId === e.target.id) === -1) {
      this.setState({
        ...this.state,
        experience: {
          companyName: this.state.experience.companyName,
          role: this.state.experience.role,
          description: this.state.experience.description,
          jobStart: this.state.experience.jobStart,
          jobEnd: this.state.experience.jobEnd,
          edit: false,
          expId: uniqid(),
        },
      }, () =>
        this.setState({
          ...this.state,
          experiences: this.state.experiences.concat(this.state.experience)
        }))
    }
    else {
      const findIndex = this.state.experiences.findIndex(exp => exp.expId === e.target.id);
      const sliceBefore = this.state.experiences.slice(0, findIndex);
      const sliceAfter = this.state.experiences.slice(findIndex + 1);
      this.setState({
        ...this.state,
        experience: {
          companyName: this.state.experience.companyName,
          role: this.state.experience.role,
          description: this.state.experience.description,
          jobStart: this.state.experience.jobStart,
          jobEnd: this.state.experience.jobEnd,
          edit: false,
          expId: uniqid(),
        },
      }, () =>
        this.setState({
          ...this.state,
          experiences: sliceBefore.concat(this.state.experience, sliceAfter)
        }))
    }
  }
  render() {
    const {
      experience,
      experiences
    } = this.state;

    return (
      
      <div className="Experiences">
        <div className="Title">Your Experience</div>

        <div className="Read">
          {experiences.map((item) => {
            if (item.edit === false) {
              return <div className="Group" id={item.expId} key={item.expId}>
                <div className = "Entry">
                <div className = "EnteredValue">
                  <div className="Label">Name of company:</div>
                  <div>{item.companyName}</div>
                </div>
                
                {item.role &&
                  <div className="EnteredValue">
                    <div className="Label">Role:</div>
                    <div>{item.role}</div>
                  </div>}
                {item.description &&
                  <div className="EnteredValue">
                    <div className="Label">Description:</div>
                    <div>{item.description}</div>
                  </div>}
                    
                {item.jobStart &&
                  <div className="EnteredValue">
                    <div className="Label">Year started:</div>
                    <div>{item.jobStart}</div>
                  </div>}
                    
                {item.jobEnd &&
                  <div className="EnteredValue">
                    <div className="Label">Year ended:</div>
                    <div>{item.jobEnd}</div>
                    </div>}
                  </div>
                
                <div className = "EditBtn">
                  <button className ="Edit" id={item.expId} type="edit" onClick={this.edit}>Edit Experience</button>
                  <button className ="Delete" id={item.expId} type="delete" onClick={this.delete}>Delete Experience</button>
                </div>
          </div>
          }})}
        </div>
        
        { experience.edit &&
          <div className="Write">

            <div className="InputField">
            <label htmlFor="companyName">Company Name:</label>
            <input
              onChange={this.recordInputs}
              value={experience.companyName || ""}
              type="text"
                id="companyName" />
            </div>
            
            <div className="InputField">
              <label htmlFor="role">Your Role:</label>
              <input
              onChange={this.recordInputs}
              value={experience.role || ""}
              type="text"
                id="role" />
            </div>

            <div className="InputField">
              <label htmlFor="description">Description:</label>
              <textarea
              onChange={this.recordInputs}
              value={experience.description || ""}
                type="textarea" 
                rows="4"
                id="description" />
            </div>
            
            <div className="InputField">
              <label htmlFor="jobStart">Year Started:</label>
              <input
              onChange={this.recordInputs}
              value={experience.jobStart || ""}
              type="number"
                id="jobStart" />
            </div>
            
            <div className="InputField">
              <label htmlFor="jobEnd">Year Ended:</label>
              <input
              onChange={this.recordInputs}
              value={experience.jobEnd || ""}
              type="number"
                id="jobEnd" />
            </div>
            
            <button type="edit" id={experience.expId} onClick={this.save}>Save Experience</button>
            </div>
        }

        <button className ="Add" type="add" onClick={this.add}>+ Add Experience</button>
      </div>
    );
  }
}

export default Experience