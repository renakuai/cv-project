import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: {
        schoolName: '',
        degree: '',
        eduStart: '',
        eduEnd: '',
        edit: false,
        eduId: uniqid(),
      },
      educations: [],
    }
  }
  recordInputs = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        [e.target.id]: e.target.value,
      }
    })
  }
  edit = (e) => {
    e.preventDefault();
    const findIndex = this.state.educations.findIndex(edu => edu.eduId === e.target.id);
    const sliceBefore = this.state.educations.slice(0, findIndex);
    const sliceAfter = this.state.educations.slice(findIndex + 1);
    this.setState({
      ...this.state,
      education: {
        schoolName: this.state.educations[findIndex].schoolName,
        degree: this.state.educations[findIndex].degree,
        eduStart: this.state.educations[findIndex].eduStart,
        eduEnd: this.state.educations[findIndex].eduEnd,
        edit: true,
        eduId: this.state.educations[findIndex].eduId,
      },
    }, () =>
        this.setState({
          ...this.state,
          educations: sliceBefore.concat(this.state.education, sliceAfter)
    }))
  }
  delete = (e) => {
    const findIndex = this.state.educations.findIndex(edu => edu.eduId === e.target.id);
    const sliceBefore = this.state.educations.slice(0, findIndex);
    const sliceAfter = this.state.educations.slice(findIndex + 1);
    this.setState({
      ...this.state,
      educations: sliceBefore.concat(sliceAfter),
    })
  }
  add = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: {
        schoolName: '',
        degree: '',
        eduStart: '',
        eduEnd: '',
        edit: true,
        eduId: uniqid(),
      },
    })
  }
  save = (e) => {
    e.preventDefault();
    if (this.state.educations.findIndex(edu => edu.eduId === e.target.id) === -1) {
      this.setState({
        ...this.state,
        education: {
          schoolName: this.state.education.schoolName,
          degree: this.state.education.degree,
          eduStart: this.state.education.eduStart,
          eduEnd: this.state.education.eduEnd,
          edit: false,
          eduId: uniqid(),
        },
      }, () =>
        this.setState({
          ...this.state,
          educations: this.state.educations.concat(this.state.education)
        }))
    }
    else {
      const findIndex = this.state.educations.findIndex(edu => edu.eduId === e.target.id); //0
      const sliceBefore = this.state.educations.slice(0, findIndex);
      const sliceAfter = this.state.educations.slice(findIndex + 1);
      this.setState({
        ...this.state,
        education: {
          schoolName: this.state.education.schoolName,
          degree: this.state.education.degree,
          eduStart: this.state.education.eduStart,
          eduEnd: this.state.education.eduEnd,
          edit: false,
          eduId: this.state.education.eduId,
        },
      }, () =>
        this.setState({
          ...this.state,
          educations: sliceBefore.concat(this.state.education, sliceAfter)
        }))
    }
  }
  render() {
    const {
      education,
      educations
    } = this.state;

    return (
      
      <div className="Education">
        <div className="Title">Your Education</div>

        <div className="Read">
          {educations.map((item) => {
            if (item.edit === false) {
              return <div className="Group" id={item.eduId} key={item.eduId}>
                  <div className="Entry">
                {item.schoolName &&
                  <div className="EnteredValue">
                    <div className="Label">Name of School:</div>
                    <div>{item.schoolName}</div>
                  </div>}
                
                {item.degree &&
                  <div className="EnteredValue">
                    <div className="Label">Degree Received:</div>
                    <div>{item.degree}</div>
                  </div>}
                
                {item.eduStart &&
                  <div className="EnteredValue">
                    <div className="Label">Year Started:</div>
                    <div>{item.eduStart}</div>
                  </div>}

                {item.eduEnd &&
                  <div className="EnteredValue">
                    <div className="Label">Year Graduated:</div>
                    <div>{item.eduEnd}</div>
                  </div>} </div>
                
                <div className = "EditBtn">
                  <button className ="Edit" id={item.eduId} type="edit" onClick={this.edit}>Edit Education</button>
                  <button className ="Delete" id={item.eduId} type="delete" onClick={this.delete}>Delete Education</button>
                </div>
          </div>
          }})}
        </div>
        
        { education.edit &&
          <div className="Write">
            <div className="InputField">
            <label htmlFor="schoolName">Name of School:</label>
            <input
              onChange={this.recordInputs}
              value={education.schoolName || ""}
              type="text"
                id="schoolName" />
            </div>
            
            <div className="InputField">
              <label htmlFor="degree">Degree Received:</label>
              <input
              onChange={this.recordInputs}
              value={education.degree || ""}
              type="text"
                id="degree" />
            </div>
            
            <div className="InputField">
              <label htmlFor="eduStart">Year Started:</label>
              <input
              onChange={this.recordInputs}
              value={education.eduStart || ""}
              type="number"
                id="eduStart" />
            </div>
            
            <div className="InputField">
              <label htmlFor="eduEnd">Year Graduated:</label>
              <input
              onChange={this.recordInputs}
              value={education.eduEnd || ""}
              type="number"
                id="eduEnd" />
            </div>
            
            <button className ="Save" type="edit" id={education.eduId} onClick={this.save}>Save Education</button>
            </div>
        }

        <button className ="Add" type="add" onClick={this.add}>+ Add Education</button>
      </div>
    );
  }
}

export default Education