import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ROLES } from "../constants/auth";

function CourseRYearBox(props) {
  const {
    auth: { role }
  } = useContext(AuthContext);

  return (
    <div className="w=9/12 bg-gray-200 mb-8 py-4 px-4">
      <h4 className="mb-2 text-1xl font-medium">
        {props.semester}
        {role === ROLES.ADMIN ?  
        <button
          onClick={props.removeSectionFunc.bind(this, props.semester)}
          className="my-2 ml-2 bg-red-500 hover:bg-red-700 text-white px-1 rounded"
        >
          remove
        </button>
        : null }
      </h4>
      <ul className="list-inside ml-4">
        {/* <li>Instructor(s): {props.professors.map( (professor) => {
          return professor + "; "
        } )}</li> */}
        {/* <li>
          <a
            href={props.courseWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-600 hover:text-blue-800"
          >
            Course Website
          </a>
        </li> */}
        <li>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-600 hover:text-blue-800"
          >
            {props.title} - {props.link}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CourseRYearBox;
