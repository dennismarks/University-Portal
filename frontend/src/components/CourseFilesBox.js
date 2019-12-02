import React, { useState } from "react";
import CourseRYearBox from "./CourseRYearBox";
import AddFilesModal from "./AddFilesModal";

function CourseFilesBox(props) {

  const [courseResources, setCourseResources] = useState(
    props.courseResourcesList
  );

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
        <AddFilesModal
          display={courseDisplay}
          cancelFunc={cancelAddDisplay}
          setCourseResources={setCourseResources}
          courseCode={props.courseCode}
        />
      ) : null}
      <h3 className="text-2xl font-medium my-4"> Course Resources</h3>
      <div className="h-64 pr-2 overflow-auto">
        {console.log(props.courseResourcesList)}
        {courseResources
          ? courseResources.map(courseResource => (
              <CourseRYearBox
                key={courseResource._id}
                semester={courseResource.semester}
                link={courseResource.link}
                title={courseResource.title}
                removeSectionFunc={removeCourseResources}
              />
            ))
          : "No course resources yet. Add a resource below to put some here!"}
      </div>
      {props.canSubmitFiles && (
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
