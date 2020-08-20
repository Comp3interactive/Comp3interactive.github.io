import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";
// Pages
import { Home } from "./Pages/Home";
// import { DevLogs } from "./Pages/DevLogs";
import { AssetCollections } from "./Pages/AssetCollections";
import { SupportUs } from "./Pages/SupportUs";
import { FourZeroFour } from "./Pages/404";
// Game Pages
import { WordDrop } from "./Pages/GameLandingPages/WordDrop";
// WIP
import { ComponentPlayground } from "./Pages/ComponentPlayground";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Playground"} component={ComponentPlayground} />
        {/* <Route path={"/Devlogs"} component={DevLogs} /> */}
        <Route path={"/Assets"} component={AssetCollections} />
        <Route path={"/SupportUs"} component={SupportUs} />
        {/* GAME PAGES */}
        <Route path={"/WordDrop"} component={WordDrop} />
        {/* 404 */}
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}

export default App;
