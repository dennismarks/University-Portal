import React from "react";

function CourseInfoBox(props) {

  return (
    <div className="w-6/12 my-5 mr-5 ml-10 px-10 pb-10 bg-white shadow-md">
      <h3 className="text-2xl font-medium my-6"> Course Info</h3>
      <h5 className="text-small h-64 bg-gray-200 px-4 py-6"> {props.courseDescription} </h5>
    </div>
  );
}

export default CourseInfoBox;
