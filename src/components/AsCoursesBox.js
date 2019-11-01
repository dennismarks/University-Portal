import React from "react";


function AsCoursesBox(props) {

  return (
    <div className="w-6/12 mr-10 ml-5 px-10 pb-10 my-5 bg-gray-200">
      <h3 className="text-2xl font-medium my-6"> Associated Courses </h3>
        <h5> Prerequisites: {props.prerequisites} </h5> <br />
        <h5> Recommended Preparation: {props.recommendedPreparation} </h5> <br />
        <h5>Exclusions: {props.exclusions} </h5> <br />
        <h5> Breadth Requirements: {props.breadthRequirements} </h5> <br />
        <h5> Distribution Requirements: {props.distributionRequirements} </h5>
    </div>
  );
}

export default AsCoursesBox;
