import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Route components */
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Course from "./pages/Course";
import User from "./pages/User";
import ForgotPW from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot" component={ForgotPW} />
          <Route path="/course/:courseCode" component={Course} />
          <Route path="/user" component={User} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
