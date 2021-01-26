import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";

// Pages
import { Home } from "./Pages/Home";
import { Downloads } from "./Pages/Downloads";
import { Projects } from "./Pages/Projects";
import { Events } from "./Pages/Events";
import { Support } from "./Pages/Support";
import { FourZeroFour } from "./Pages/404";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Downloads"} exact component={Downloads} />
        <Route path={"/Projects"} exact component={Projects} />
        <Route path={"/Events"} exact component={Events} />
        <Route path={"/Support"} exact component={Support} />
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}

export default App;
