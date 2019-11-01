import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Route components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Course from "./pages/Course";
import User from "./pages/User";
import ForgotPW from "./pages/ForgotPassword";
import Admin from "./pages/Admin";

/* ADMIN */
import HomeAdmin from "./pages/Admin/Home";
import SearchAdmin from "./pages/Admin/Search";
import CourseAdmin from "./pages/Admin/Course";

/* STUDENT */
import HomeStudent from "./pages/Student/Home";
import SearchStudent from "./pages/Student/Search";
import CourseStudent from "./pages/Student/Course";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot" component={ForgotPW} />
          <Route path="/course/:courseCode" component={Course} />
          <Route path="/user" component={User} />
          <Route exact path="/admin" component={Admin} />
          
          <Route path="/admin/home" component={HomeAdmin} />
          <Route path="/admin/search" component={SearchAdmin} />
          <Route path="/admin/course/:courseCode" component={CourseAdmin} />

          <Route path="/student/home" component={HomeStudent} />
          <Route path="/student/search" component={SearchStudent} />
          <Route path="/student/course/:courseCode" component={CourseStudent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
