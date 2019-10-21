import React from "react";
import { uid } from "react-uid";

class CourseList extends React.Component {
  render() {
    const { courses, toRender, showMore, name } = this.props;
    if (toRender >= 3) {
      return (
        <div className="courses">
          <h1>{name}</h1>
          <ul>
            {courses.slice(0, toRender).map(course => {
              return <li key={uid(course)}>{course}</li>;
            })}
          </ul>
          {toRender === 3 ? (
            <button onClick={showMore(name)}>Show more</button>
          ) : (
            <button onClick={showMore(name)}>Show less</button>
          )}
        </div>
      );
    } else if (toRender > 0 && toRender < 3) {
      return (
        <div className="courses">
          <h1>{name}</h1>
          <ul>
            {courses.slice(0, toRender).map(course => {
              return <li key={uid(course)}>{course}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="courses courses-inactive">
          <h1>{name}</h1>
        </div>
      );
    }
  }
}

export default CourseList;
