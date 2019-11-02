import React from "react";
import CourseRYearBox from "./CourseRYearBox";

function CourseFilesBox() {
  return (
    <div className="w-6/12 mt-5 mr-10 ml-5 px-10 pb-5 bg-white shadow-md">
      <h3 className="text-2xl font-medium my-4"> Course Resources</h3>
      <div className="h-64 pr-2 overflow-auto">
        <CourseRYearBox
          semester="Fall 2014"
          professors={["Eyal de Lara", ", Arnav Verma"]}
          courseWebsite="http://www.cs.toronto.edu/~delara/courses/csc309/"
          courseSyllabus="http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
        />
        <CourseRYearBox
          semester="Fall 2012"
          professors={["Eyal de Lara", ", Arnav Verma"]}
          courseWebsite="http://www.cs.toronto.edu/~delara/courses/csc309/"
          courseSyllabus="http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
        />
        <CourseRYearBox
          semester="Fall 2009"
          professors={["Eyal de Lara", ", Arnav Verma"]}
          courseWebsite="http://www.cs.toronto.edu/~delara/courses/csc309/"
          courseSyllabus="http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
        />
        <CourseRYearBox
          semester="Fall 2008"
          professors={["Eyal de Lara", ", Arnav Verma"]}
          courseWebsite="http://www.cs.toronto.edu/~delara/courses/csc309/"
          courseSyllabus="http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
        />
      </div>
    </div>
  );
}

export default CourseFilesBox;
