import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";

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
        <option value="Computer Science">Computer Science</option>
        <option value="Statistics">Statistics</option>
        <option value="Humanities">Humanities</option>
      </select>
      <br />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default AddCourseForm;