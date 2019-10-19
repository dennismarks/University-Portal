import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Route components */
import Header from "./pages/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Course from "./pages/Course";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/course" component={Course} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
