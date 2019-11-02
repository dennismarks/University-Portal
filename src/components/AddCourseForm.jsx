import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";

const AddCourseForm = p => {
  const coursesContext = useContext(CoursesContext);
  const {
    courses,
    addCourse,
    updateCourseName,
    chooseDepartment,
    curCourseName
  } = coursesContext;

  console.log(courses);

  return (
    <div className="add-course-form">
      <h1>Add New Course:</h1>
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
        defaultValue=""
        onChange={chooseDepartment}
      >
        <option value="" disabled>
          Choose Department
        </option>
        <option value="Computer Science">Computer Science</option>
        <option value="Statistics">Statistics</option>
        <option value="Humanities">Humanities</option>
      </select>
      <br />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
  //   }
};

export default AddCourseForm;
