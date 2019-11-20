import React, { useState } from "react";
import CourseRYearBox from "./CourseRYearBox";
import AddFilesModal from "./AddFilesModal";

function CourseFilesBox({ canSubmitFiles = false }) {
  const courseResourcesList = [
    {
      semester: "Fall 2014",
      professors: ["Eyal de Lara", "Arnav Verma"],
      courseWebsite: "http://www.cs.toronto.edu/~delara/courses/csc309/",
      courseSyllabus:
        "http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
    },
    {
      semester: "Fall 2012",
      professors: ["Eyal de Lara", "Arnav Verma"],
      courseWebsite: "http://www.cs.toronto.edu/~delara/courses/csc309/",
      courseSyllabus:
        "http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
    },
    {
      semester: "Fall 2008",
      professors: ["Eyal de Lara", "Arnav Verma"],
      courseWebsite: "http://www.cs.toronto.edu/~delara/courses/csc309/",
      courseSyllabus:
        "http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
    },
    {
      semester: "Fall 2004",
      professors: ["Eyal de Lara", "Arnav Verma"],
      courseWebsite: "http://www.cs.toronto.edu/~delara/courses/csc309/",
      courseSyllabus:
        "http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
    },
    {
      semester: "Fall 2001",
      professors: ["Eyal de Lara", "Arnav Verma"],
      courseWebsite: "http://www.cs.toronto.edu/~delara/courses/csc309/",
      courseSyllabus:
        "http://www.cs.toronto.edu/~delara/courses/csc309/handouts/syllabus.pdf"
    }
  ];

  const [courseResources, setCourseResources] = useState(courseResourcesList);

  const removeCourseResources = semester => {
    setCourseResources(
      courseResources.filter(data => {
        return data.semester !== semester;
      })
    );
  };

  const [courseDisplay, setCourseDisplay] = useState(false);

  const cancelAddDisplay = () => {
    setCourseDisplay(!courseDisplay);
  };

  return (
    <div className="w-6/12 mt-5 mr-10 ml-5 px-10 pb-5 bg-white shadow-md">
      {courseDisplay ? (
        <AddFilesModal display={courseDisplay} cancelFunc={cancelAddDisplay} />
      ) : null}
      <h3 className="text-2xl font-medium my-4"> Course Resources</h3>
      <div className="h-64 pr-2 overflow-auto">
        {courseResources.map(data => (
          <CourseRYearBox
            key={data.semester}
            semester={data.semester}
            professors={data.professors}
            courseWebsite={data.courseWebsite}
            courseSyllabus={data.courseSyllabus}
            removeSectionFunc={removeCourseResources}
          />
        ))}
      </div>
      {canSubmitFiles && (
        <div className="flex justify-center">
          <button
            onClick={cancelAddDisplay}
            className="btn btn-blue rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-6"
          >
            Submit Resources For Approval
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseFilesBox;
