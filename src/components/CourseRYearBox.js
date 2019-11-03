import React from "react";

function CourseRYearBox(props) {

  return (
    <div className="w=9/12 bg-gray-200 mb-8 py-4 px-4">
      <h4 className="mb-2 text-1xl font-medium">
        {props.semester}
        <button className="my-2 ml-2 bg-red-500 hover:bg-red-700 text-white px-1 rounded">
          remove
        </button>
      </h4>
      <ul className="list-inside ml-4">
        <li>
          Instructor(s): {props.professors}
          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white px-1 rounded">
            remove
          </button>
        </li>
        <li>
          <a
            href={props.courseWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-600 hover:text-blue-800"
          >
            Course Website
          </a>
          <button className="my-2 ml-2 bg-red-500 hover:bg-red-700 text-white px-1 rounded">
            remove
          </button>
        </li>
        <li>
          <a
            href={props.courseSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-blue-600 hover:text-blue-800"
          >
            Course Syllabus
          </a>
          <button className="my-2 ml-2 bg-red-500 hover:bg-red-700 text-white px-1 rounded">
            remove
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CourseRYearBox;
