import React from "react";
import UserInfo from "../components/UserInfo";
import CoursesCard from "../components/CoursesCard";

class User extends React.Component {
  state = {
    userInfo: {
      img: "avatar.png",
      name: "Alex Liskov",
      university: "University of Toronto",
      program: "Computer Science, 2021"
    },
    courses: {
      currentCourses: [
        "CSC301 - Introduction to Software Engineering",
        "CSC309 - Programming on the Web",
        "CSC373 - Algorithm Design, Analysis & Complexity",
        "CSC428 - Human-Computer Interaction",
        "CSC236 - Introduction to the Theory of Computation",
        "CSC236 - Introduction to the Theory of Computation "
      ],
      takenCourses: [
        "CSC236 - Introduction to the Theory of Computation",
        "CSC258 - Computer Organization"
      ],
      toTakeCourses: []
    },
    currentRender: 0,
    takenRender: 0,
    toTakeRender: 0
  };

  componentDidMount() {
    const cur = this.state.courses.currentCourses.length;
    const taken = this.state.courses.takenCourses.length;
    const toTake = this.state.courses.toTakeCourses.length;

    cur > 3
      ? this.setState({ currentRender: 3 })
      : this.setState({ currentRender: cur });

    taken > 3
      ? this.setState({ takenRender: 3 })
      : this.setState({ takenRender: taken });

    toTake > 3
      ? this.setState({ toTakeRender: 3 })
      : this.setState({ toTakeRender: toTake });
  }

  showMore = name => () => {
    const cur = this.state.courses.currentCourses.length;
    const taken = this.state.courses.takenCourses.length;
    const toTake = this.state.courses.toTakeCourses.length;

    if (name === "◦ Current Courses") {
      this.state.currentRender === cur
        ? this.setState({ currentRender: 3 })
        : this.setState({ currentRender: cur });
    } else if (name === "◦ Taken Courses") {
      this.state.takenRender === taken
        ? this.setState({ takenRender: 3 })
        : this.setState({ takenRender: taken });
    } else if (name === "◦ Future course") {
      this.state.toTakeRender === toTake
        ? this.setState({ toTakeRender: 3 })
        : this.setState({ toTakeRender: toTake });
    }
  };

  render() {
    return (
      <div className="main">
        <UserInfo userInfo={this.state.userInfo}></UserInfo>
        <CoursesCard
          courses={this.state.courses.currentCourses}
          toRender={this.state.currentRender}
          showMore={this.showMore}
          name="◦ Current Courses"
        ></CoursesCard>
        <CoursesCard
          courses={this.state.courses.takenCourses}
          toRender={this.state.takenRender}
          showMore={this.showMore}
          name="◦ Taken Courses"
        ></CoursesCard>
        <CoursesCard
          courses={this.state.courses.toTakeCourses}
          toRender={this.state.toTakeRender}
          showMore={this.showMore}
          name="◦ Future course"
        ></CoursesCard>
      </div>
    );
  }
}

export default User;
