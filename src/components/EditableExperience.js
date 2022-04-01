import React from "react"

const EditableExperience = (props) => {
  return (
    <div className="Experience">
        <label htmlFor="companyName">Company Name</label>
          <input
              onChange={props.handleInputs}
              value={props.experience.companyName || "" }
              type="text"
              className="experience"
              id="companyName" />
          <label htmlFor="role">Role</label>
          <input
            onChange={props.handleInputs}
            value={props.experience.role || "" }
            type="text"
            className="experience"
            id="role" />
          <label htmlFor="description">Description of role</label>
          <input
            onChange={props.handleInputs}
            value={props.experience.description || "" }
            type="textarea"
            className="experience"
            id="description" />
          <label htmlFor="yearStartJob">Year started role</label>
          <input
            onChange={props.handleInputs}
            value={props.experience.yearStartJob || "" }
            type="number"
            className="experience"
            id="yearStartJob" />
          <label htmlFor="yearStartJob">Year ended role</label>
          <input
            onChange={props.handleInputs}
            value={props.experience.yearEndJob || "" }
            type="number"
            className="experience"
            id="yearEndJob" />
      <button type="edit" id={props.experience.id} onClick={props.addExperience}>Save Experience</button>
    </div>
  );
}

export default EditableExperience