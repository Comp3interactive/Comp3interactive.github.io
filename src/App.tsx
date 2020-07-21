import React from "react";
import "./App.css";
// Pages
import { DevLogs } from "./Pages/DevLogs";
import { SupportUs } from "./Pages/SupportUs";
// WIP
import { UnderConstruction } from "./Pages/UnderConstruction";
import { ComponentPlayground } from "./Pages/ComponentPlayground";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          exact
          component={UnderConstruction}
        />
        <Route
          path={process.env.PUBLIC_URL + "/Playground"}
          component={ComponentPlayground}
        />
        <Route path={process.env.PUBLIC_URL + "/Devlogs"} component={DevLogs} />
        <Route
          path={process.env.PUBLIC_URL + "/SupportUs"}
          component={SupportUs}
        />
      </Switch>
    </Router>
  );
}

export default App;
