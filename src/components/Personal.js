import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";

class Personal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      edit: false,
    }
  }
  recordInputs = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    })
  }
  edit = (e) => {
    this.setState({
      ...this.state,
      edit: true,
    })
  }
  save = (e) => {
    this.setState({
      ...this.state,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      edit: false,
    })
  }
  render() {
    const {
      name,
      email,
      phone,
      edit,
    } = this.state;
    
    return (
      <div className="Personal">
        <div className="Title">Your Personal Info</div>

        {edit ?
          <div className="Write">
            <div className="InputField">
              <label htmlFor="name">Full Name:</label>
              <input
              onChange={this.recordInputs}
              value={name || ""}
              type="text"
                id="name" />
            </div>
            
            <div className="InputField">
              <label htmlFor="email">Email:</label>
              <input
              onChange={this.recordInputs}
              value={email || ""}
              type="text"
                id="email" />
            </div>
            
            <div className="InputField">
              <label htmlFor="email">Phone:</label>
              <input
              onChange={this.recordInputs}
              value={phone || ""}
              type="number"
                id="phone" />
            </div>
            
              <button className ="Save" type="edit" id="personalSave" onClick={this.save}>Save Personal Info</button>
          </div> :
          
          <div className="Read">
            {(name || email || phone) &&
              <div className="ReadGroup">
                <div className="Group">
                  <div className="Entry">
                  {name &&
                    <div className="EnteredValue">
                      <div className="Label">Full Name: </div>
                      <div>{name}</div>
                    </div>}
            
                  {email &&
                    <div className="EnteredValue">
                      <div className="Label">Email:</div>
                      <div>{email}</div>
                    </div>}
              
                  {phone &&
                    <div className="EnteredValue">
                      <div className="Label">Phone:</div>
                      <div>{phone}</div>
                      </div>}
                    </div>
                  <div className="EditBtns">
                  <button className="Edit" type="edit" id="personalEdit" onClick={this.edit}>Edit Personal Info</button>
                </div>
                </div>
            
              </div>}
            {!name &&
              <div className="AddBtn">
                <button className="Add" type="edit" id="personalEdit" onClick={this.edit}>+ Add Personal Info</button>
              </div>}
        </div>
        }

      </div>
    )
  }
}

export default Personal