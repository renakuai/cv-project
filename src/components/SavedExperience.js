import React from "react"

const SavedExperience = (props) => {
  return (
    <div className="Experiences">
      {props.experiences.map((item) => {
          return <div id={item.id} key={item.id}>
            <div>{item.companyName}</div>
            <div>{item.role}</div>
            <div>{item.description}</div>
            <div>{item.yearStartJob}</div>
            <div>{item.yearEndJob}</div>
            <button type="edit" id={item.id} onClick={props.editExperienceInfo}>Edit Experience</button>
          </div>
        })}
  </div>
  );
};

export default SavedExperience