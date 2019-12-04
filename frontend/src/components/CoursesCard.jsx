import React, { useEffect, useState } from "react";
import { uid } from "react-uid";
import "../stylesheets/coursesCard.css";

function CoursesCard(props) {
  const { name, courseArr } = props;
  const [more, setMore] = useState(false);
  // const [ courseArr, setCourseArr ] = useState([]);

  // useEffect(() => {
  //   const courseIdsObj = JSON.stringify({ courseIds: courses });
  //   fetch(`/api/v1/courses/ids`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: courseIdsObj
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(coursesObj => {
  //       setCourseArr(coursesObj);
  //       // console.log(courseArr) // returns []
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  // console.log( courseArr, "sdfsdf")
  if (courseArr.length > 3) {
    return (
      <div className="courses">
        <h1>{name}</h1>
        
        {more ? (
          <ul>
            {courseArr.map(course => {
              return <li key={course._id}>{course.code} - {course.info.title}</li>;
            })}
          </ul>
        ) : (
          <ul>
            {courseArr.slice(0, 3).map(course => {
              return <li key={course._id}>{course.code} - {course.info.title}</li>;
            })}
          </ul>
        )}
        {/* change the button label and modify the state */}
        {more === false ? (
          <button
            onClick={() => {
              setMore(true);
            }}
          >
            Show more
          </button>
        ) : (
          <button
            onClick={() => {
              setMore(false);
            }}
          >
            Show less
          </button>
        )}
      </div>
    );
  } else if (courseArr.length > 0 && courseArr.length <= 3) {
    return (
      <div className="courses">
        <h1>{name}</h1>
        <ul>
          {courseArr.map(course => {
          return <li key={course._id}> {course.code} - {course.info.title}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CoursesCard;
