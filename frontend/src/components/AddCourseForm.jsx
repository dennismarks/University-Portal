import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";
import ALL_DEPARTMENTS from "../constants/departments";

const AddCourseForm = () => {
  // Courses Context is being used here to keep track of the input fields
  // and provide functionality to add a new course
  // It's currently being added to a course array because app requires a
  // server to save it not locally
  const coursesContext = useContext(CoursesContext);
  const {
    addCourse,
    updateCourseName,
    chooseDepartment,
    curCourseName,
    curChosenDepartment
  } = coursesContext;

  function addCourseToDB() {
    const jsonBody = JSON.stringify({
      code: curCourseName,
      school: "UofT"
    });
    console.log(jsonBody);
    fetch(`http://localhost:3001/api/v1/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonBody
    })
      .then(res => res.json())
      .then(result => {
        alert("Course Added")
      })
      .catch(err => {
        alert("Invalid Course Code for UofT")
      });
  }

  return (
    <div className="add-course-form">
      <h1>Add New Course</h1>
      <input
        className="name-input"
        name="courseName"
        type="text"
        placeholder="Course name"
        value={curCourseName}
        onChange={updateCourseName}
      />
      <br />
      <select
        className="select-dep"
        name="option"
        value={curChosenDepartment}
        onChange={chooseDepartment}
      >
        <option value="" disabled>
          Choose department
        </option>
        {ALL_DEPARTMENTS.map(course => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
      <br />
      <button onClick={addCourseToDB}>Add Course</button>
    </div>
  );
};

export default AddCourseForm;
