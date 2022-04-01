import React from "react"

const EditableGeneral = (props) => {
  return (
    <div className="General">
    <label htmlFor="name">Full name</label>
      <input
          onChange={props.handleInputs}
          value={props.general.name || "" }
          type="text"
          className="general"
          id="name" />
    <label htmlFor="email">Email</label>
      <input
          onChange={props.handleInputs}
          value={props.general.email || "" }
          type="text"
          className="general"
          id="email" />
    <label htmlFor="email">Phone</label>
      <input
          onChange={props.handleInputs}
          value={props.general.phone || "" }
          type="number"
          className="general"
        id="phone" />
      <button type="edit" id="generalSave" onClick={props.addGeneralInfo}>Save Personal Info</button>
    </div>
  );
}

export default EditableGeneral