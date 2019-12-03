import React, { useEffect, useState } from "react";
import { uid } from "react-uid";
import "../stylesheets/coursesCard.css";

function CoursesCard(props) {
  const [more, setMore] = useState(false);
  const [ courseArr, setCourseArr ] = useState([]);

  const { courses, name } = props;
  useEffect(() => {
    const courseIdsObj = JSON.stringify({ courseIds: courses });
    fetch(`/api/v1/courses/ids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: courseIdsObj
    })
      .then(res => {
        return res.json();
      })
      .then(coursesObj => {
        console.log(coursesObj)
        setCourseArr(coursesObj);
        console.log(courseArr)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (courses.length > 3) {
    return (
      <div className="courses">
        <h1>{name}</h1>
        {console.log("inner", courseArr)}
        {more ? (
          <ul>
            {courses.map(course => {
              return <li key={uid(course)}>{course}</li>;
            })}
          </ul>
        ) : (
          <ul>
            {courses.slice(0, 3).map(course => {
              return <li key={uid(course)}>{course}</li>;
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
  } else if (courses.length > 0 && courses.length <= 3) {
    return (
      <div className="courses">
        <h1>{name}</h1>
        <ul>
          {courses.slice(0, courses.length).map(course => {
            return <li key={uid(course)}>{course}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CoursesCard;
