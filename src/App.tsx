import React from "react";
import "./App.css";
import { UnderConstruction } from "./Pages/UnderConstruction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UnderConstruction} />
      </Switch>
    </Router>
  );
}

export default App;
