import React from "react";
import "./App.css";
import { UnderConstruction } from "./Pages/UnderConstruction";
import { ComponentPlayground } from "./Pages/ComponentPlayground";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UnderConstruction} />
        <Route path="/Playground" exact component={ComponentPlayground} />
      </Switch>
    </Router>
  );
}

export default App;
