import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Route components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
