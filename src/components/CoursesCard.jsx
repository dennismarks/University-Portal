import React from "react";
import { uid } from "react-uid";
import "../stylesheets/coursesCard.css";

class CoursesCard extends React.Component {
  state = {
    more: false
  };

  render() {
    const { courses, name } = this.props;

    if (courses.length > 3) {
      return (
        <div className="courses">
          <h1>{name}</h1>
          {this.state.more ? (
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
          {this.state.more === false ? (
            <button
              onClick={() => {
                this.setState({ more: true });
              }}
            >
              Show more
            </button>
          ) : (
            <button
              onClick={() => {
                this.setState({ more: false });
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
}

export default CoursesCard;
