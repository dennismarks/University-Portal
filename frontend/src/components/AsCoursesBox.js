import React from "react";

function AsCoursesBox(props) {
  return (
    <div className="w-6/12 mr-10 ml-5 px-10 pb-10 my-5 bg-white shadow-md ">
      <h3 className="text-2xl font-medium my-6"> Associated Courses </h3>
      <div className="">
        <h5 className="bg-gray-200 py-4 px-2">
          {" "}
          Prerequisites: {props.prerequisites && props.prerequisites[0] !== "NULL"
            ? props.prerequisites
            : "No course prerequisites"}{" "}
        </h5>{" "}
        <br />
        <h5 className="bg-gray-200 py-4 px-2">
          {" "}
          Recommended Preparation:{" "}
          {props.recommendedPreparation && props.recommendedPreparation[0] !== "NULL"
            ? props.recommendedPreparation
            : "No recommended preparation"}{" "}
        </h5>{" "}
        <br />
        <h5 className="bg-gray-200 py-4 px-2">
          Exclusions:{" "}
          {props.exclusions && props.exclusions[0] !== "NULL"
            ? props.exclusions
            : "No course exclusions"}{" "}
        </h5>{" "}
        <br />
        <h5 className="bg-orange-100 py-4 px-2">
          {" "}
          Breadth/ Distribution Requirements: {props.breadthRequirements} /{" "}
          {props.distributionRequirements}{" "}
        </h5>{" "}
        <br />
      </div>
    </div>
  );
}

export default AsCoursesBox;
