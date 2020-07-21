import React from "react";
import "./App.css";
import ScrollToTop from "./Utils/ScrollToTop";
// Pages
import { Home } from "./Pages/Home";
import { DevLogs } from "./Pages/DevLogs";
import { AssetCollections } from "./Pages/AssetCollections";
import { SupportUs } from "./Pages/SupportUs";
import { ContactUs } from "./Pages/ContactUs";
import { FourZeroFour } from "./Pages/404";
// WIP
import { ComponentPlayground } from "./Pages/ComponentPlayground";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Playground"} component={ComponentPlayground} />
        <Route path={"/Devlogs"} component={DevLogs} />
        <Route path={"/Assets"} component={AssetCollections} />
        <Route path={"/SupportUs"} component={SupportUs} />
        <Route path={"/Contact"} component={ContactUs} />
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}

export default App;
