import React from "react";
import { uid } from "react-uid";
import "../stylesheets/coursesCard.css";

class CoursesCard extends React.Component {
  state = {
    more: false
  };

  render() {
    const { courses, toRender, name } = this.props;

    if (toRender > 3) {
      return (
        <div className="courses">
          <h1>◦ {name}</h1>
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
    } else if (toRender > 0 && toRender <= 3) {
      return (
        <div className="courses">
          <h1>◦ {name}</h1>
          <ul>
            {courses.slice(0, toRender).map(course => {
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
