import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";
// Pages
import { Home } from "./Pages/Home";
import { Resume } from "./Pages/Resume";
import { FourZeroFour } from "./Pages/404";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Resume"} exact component={Resume} />
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}

export default App;
