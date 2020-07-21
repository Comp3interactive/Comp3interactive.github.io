import React from "react";
import "./App.css";
// Pages
import { Home } from "./Pages/Home";
import { DevLogs } from "./Pages/DevLogs";
import { SupportUs } from "./Pages/SupportUs";
import { FourZeroFour } from "./Pages/404";
// WIP
import { ComponentPlayground } from "./Pages/ComponentPlayground";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Playground"} component={ComponentPlayground} />
        <Route path={"/Devlogs"} component={DevLogs} />
        <Route path={"/SupportUs"} component={SupportUs} />
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}

export default App;
