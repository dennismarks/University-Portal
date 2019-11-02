import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

/* Route components */
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Course from "./pages/Course";
import User from "./pages/User";
import ForgotPW from "./pages/ForgotPassword";
import Admin from "./pages/Admin";
import Header from "./components/Header";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";
import { CoursesContextProvider } from "./context/CoursesContext";

function App() {
  const users = [
    {
      userInfo: {
        img: "avatar0.png",
        name: "Alex Liskov",
        university: "University of Toronto",
        program: "Computer Science, 2021",
        id: 0
      },
      courses: {
        currentCourses: [
          "CSC301 - Introduction to Software Engineering",
          "CSC309 - Programming on the Web",
          "CSC373 - Algorithm Design, Analysis & Complexity",
          "CSC428 - Human-Computer Interaction",
          "CSC236 - Introduction to the Theory of Computation"
        ],
        takenCourses: [
          "CSC236 - Introduction to the Theory of Computation",
          "CSC258 - Computer Organization"
        ],
        toTakeCourses: ["CSC369H1: Operating Systems"]
      }
    },
    {
      userInfo: {
        img: "avatar1.png",
        name: "Wayne Spon",
        university: "University of Toronto",
        program: "Computer Science, 2023",
        id: 1
      },
      courses: {
        currentCourses: [
          "CSC108H1: Introduction to Computer Programming",
          "CSC165H1: Mathematical Expression and Reasoning",
          "MAT137Y1: Calculus"
        ],
        takenCourses: [],
        toTakeCourses: [
          "CSC148H1: Introduction to Computer Science",
          "CSC207H1: Software Design"
        ]
      }
    },
    {
      userInfo: {
        img: "avatar2.png",
        name: "Katie Xuo",
        university: "University of Toronto",
        program: "Statistics, 2023",
        id: 2
      },
      courses: {
        currentCourses: [
          "CSC148H1: Introduction to Computer Science",
          "MAT136H1: Calculus 1(B)"
        ],
        takenCourses: [
          "MAT135H1: Calculus 1(A)",
          "CSC108H1: Introduction to Computer Programming"
        ],
        toTakeCourses: [
          "CSC165H1: Mathematical Expression and Reasoning",
          "CSC207H1: Software Design"
        ]
      }
    }
  ];

  const courses = [
    "CSC108H1: Introduction to Computer Programming",
    "CSC148H1: Introduction to Computer Science"
  ];

  return (
    <div className="App">
      <AuthProvider>
        <CoursesContextProvider courses={courses}>
          <UsersContextProvider users={users}>
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot" component={ForgotPW} />
                <Route path="/course/:courseCode" component={Course} />
                <Route path="/user/:id" component={User} />
                <Route path="/logout" component={Logout} />
                <ProtectedRoute
                  requiredRole="admin"
                  redirectTo="/"
                  path="/admin"
                  component={Admin}
                />
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>
          </UsersContextProvider>
        </CoursesContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
