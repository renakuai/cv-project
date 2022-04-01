import React from "react"

const SavedGeneral = (props) => {
  return (
    <div className="Saved">
      <div className="SavedGeneral">
        {props.general.name}
        {props.general.email}
        {props.general.phone}
      </div>
      <button type="edit" id="generalEdit" onClick={props.editGeneralInfo}>Edit Personal Info</button>
    </div>
  );
}

export default SavedGeneral