import React, { useState } from "react";
import CourseRYearBox from "./CourseRYearBox";
import AddFilesModal from "./AddFilesModal";

function CourseFilesBox(props) {
  const [courseResources, setCourseResources] = useState(
    props.courseResourcesList
  );

  const removeCourseResources = removingCourseResId => {
    fetch(
      `http://localhost:3001/api/v1/courses/course-resource/UofT/${props.courseCode}/${removingCourseResId}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(response => {
        setCourseResources(response.courseResources);
      })
      .catch(err => console.log(err));
    // setCourseResources(
    //   courseResources.filter(data => {
    //     return data.semester !== semester;
    //   })
    // );
  };

  const [courseDisplay, setCourseDisplay] = useState(false);

  const cancelAddDisplay = () => {
    setCourseDisplay(!courseDisplay);
  };

  return (
    <div id="course" className="course-container courseResources">
      {courseDisplay ? (
        <AddFilesModal
          display={courseDisplay}
          cancelFunc={cancelAddDisplay}
          setCourseResources={setCourseResources}
          courseCode={props.courseCode}
        />
      ) : null}
      <h2>Course Resources</h2>
      <div className="pr-2 overflow-auto courseResourcesFiles">
        {console.log(props.courseResourcesList)}
        {courseResources
          ? courseResources.map(courseResource => (
              <CourseRYearBox
                key={courseResource._id}
                resId={courseResource._id}
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
