import React, { useEffect, useState } from "react";
import { uid } from "react-uid";
import "../stylesheets/coursesCard.css";

function CoursesCard({ courses = [], name }) {
  // const { name, courseArr } = props;
  const [more, setMore] = useState(false);
  const toggleMore = () => more ? setMore(false) : setMore(true)
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
  // console.log(courseArr, "sdfsdf")
  // console.log(courseArr)
  // console.log(courseArr, "courses cr rrr")

  if (!courses || !courses.length) {
    return null
  }

  const tooManyCourses = courses.length > 3
  const coursesToDisplay = more ? courses : courses.slice(0, 3)

  return (
    <div className="courses">
      <h1>{name}</h1>
      
      <ul>
        {coursesToDisplay.map(
          c => <li key={c._id}>{c.code} - {c.info.title}</li>
        )}
      </ul>

      {tooManyCourses && (
        <button onClick={() => toggleMore()}>
          {more ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default CoursesCard;
