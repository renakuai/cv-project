import React from "react"

const EditableGeneral = (props) => {
  return (
    <div className="Education">
          <label htmlFor="schoolName">School Name</label>
            <input
              onChange={props.handleInputs}
              value={props.education.schoolName || "" }
              type="text"
              className="education"
              id="schoolName" />
          <label htmlFor="degree">Degree</label>
          <input
            onChange={props.handleInputs}
            value={props.education.degree || "" }
            type="text"
            className="education"
            id="degree" />
          <label htmlFor="yearStartSchool">Year started</label>
          <input
            onChange={props.handleInputs}
            value={props.education.yearStartSchool || "" }
            type="number"
            className="education"
            id="yearStartSchool" />
          <label htmlFor="yearEndSchool">Year started</label>
          <input
            onChange={props.handleInputs}
            value={props.education.yearEndSchool || "" }
            type="number"
            className="education"
            id="yearEndSchool" />
          <button type="edit" id="generalSave" onClick={props.addEducationInfo}>Save Education Info</button>
        </div>
  );
}

export default EditableGeneral