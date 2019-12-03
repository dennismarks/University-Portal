import React from "react";

function AsCoursesBox(props) {
  return (
    <div id="course" className="course-container">
      <h2> Associated Courses </h2>
      <div>
        <p className="bg-gray-200 py-2 px-2 m-2">
          <strong>Prerequisites: </strong>
          {props.prerequisites && props.prerequisites[0] !== "NULL"
            ? props.prerequisites
            : "No course prerequisites"}
        </p>
        <p className="bg-gray-200 py-4 px-2 m-2">
          <strong>Recommended Preparation: </strong>
          {props.recommendedPreparation &&
          props.recommendedPreparation[0] !== "NULL"
            ? props.recommendedPreparation
            : "No recommended preparation"}
        </p>
        <p className="bg-gray-200 py-4 px-2 m-2">
          <strong>Exclusions: </strong>
          {props.exclusions && props.exclusions[0] !== "NULL"
            ? props.exclusions
            : "No course exclusions"}
        </p>
        <p className="bg-orange-100 py-4 px-2 m-2">
          <strong>Breadth/ Distribution Requirements: </strong>
          {props.breadthRequirements} / {props.distributionRequirements}
        </p>
      </div>
    </div>
  );
}

export default AsCoursesBox;
