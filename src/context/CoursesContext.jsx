import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { courses: initialCourses, children } = props;

  // Use State to keep the values
  let [courses, setCourses] = useState(initialCourses);
  let [curCourseName, setCurCourseName] = useState("");
  let [curChosenDepartment, setCurChosenDepartment] = useState("");

  const addCourse = p => {
    console.log(curCourseName);
    console.log(curChosenDepartment);
    setCourses(courses.concat([curCourseName]));
    setCurCourseName("");
  };

  const updateCourseName = p => {
    setCurCourseName(p.target.value);
  };

  const chooseDepartment = p => {
    setCurChosenDepartment(p.target.value);
  };

  // Make the context object:
  const coursesContext = {
    courses,
    addCourse,
    updateCourseName,
    chooseDepartment,
    curCourseName,
    curChosenDepartment
  };

  // pass the value in provider and return
  return <Context.Provider value={coursesContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export {
  Context as CoursesContext,
  Provider as CoursesContextProvider,
  Consumer as CoursesContextConsumer
};

Provider.propTypes = {
  users: PropTypes.array
};

Provider.defaultProps = {
  courses: []
};
