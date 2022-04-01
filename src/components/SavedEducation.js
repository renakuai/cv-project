import React from "react"

const SavedEducation = (props) => {
  return (
    <div className="Saved">
      <div className="SavedEducation">
        <div>{props.education.schoolName}</div>
        <div>{props.education.degree}</div>
        <div>{props.education.yearStartSchool}</div>
        <div>{props.education.yearEndSchool}</div>
      </div>
      <button type="edit" id="generalEdit" onClick={props.editEducationInfo}>Edit Education Info</button>
    </div>
  );
}

export default SavedEducation