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
import ModRequest from "./pages/ModifyRequest";
import Header from "./components/Header";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";
import { CoursesContextProvider } from "./context/CoursesContext";
import { ROLES } from "./constants/auth";

function App() {
  // users data for Courses Context
  // requires a server call
  const courses = [
    "CSC108H1: Introduction to Computer Programming",
    "CSC148H1: Introduction to Computer Science"
  ];

  return (
    <div className="App">
      <AuthProvider>
        <CoursesContextProvider courses={courses}>
          <UsersContextProvider>
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
                  requiredRoles={[ROLES.STUDENT, ROLES.ADMIN]}
                  redirectTo="/"
                  path="/request"
                  component={ModRequest}
                />
                <ProtectedRoute
                  requiredRoles={[ROLES.ADMIN]}
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
