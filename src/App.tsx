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
import { BackgroundShapes, Header, NavLinks, Footer } from "./Components";
import styled from "@emotion/styled";
import * as Tokens from "./Components/.Design/Tokens";
import useWindowDimensions from "./Hooks/ScreenSize";
import { Grid } from "@material-ui/core";

const Wrap = styled.div<{ width: number }>`
  display: block;
  background-color: ${Tokens.Colour.darkGrey};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) =>
    props.width < 600 ? "100%" : props.width < 1300 ? "90%" : "60%"};
`;

const StickyMobile = styled.div<{ width: number }>`
  ${(props) =>
    props.width < 600 &&
    `position: fixed; background-color: ${Tokens.Colour.background};`}
`;

const MobileHeaderPadding = styled.div`
  height: 20px;
  margin-bottom: 6rem;
`;

function App() {
  const { width } = useWindowDimensions();

  return (
    <Wrap width={width}>
      <Router basename="/">
        <ScrollToTop />
        <BackgroundShapes />

        <StickyMobile width={width}>
          <Header width={width} />
          <NavLinks width={width} />
        </StickyMobile>
        {width < 600 && <MobileHeaderPadding />}

        <Switch>
          <Route path={"/"} exact component={() => Home(width)} />
          <Route path={"/Downloads"} exact component={() => Downloads(width)} />
          <Route path={"/Projects"} exact component={() => Projects(width)} />
          <Route path={"/Events"} exact component={() => Events(width)} />
          <Route path={"/Support"} exact component={() => Support(width)} />
          <Route component={() => FourZeroFour(width)} />
        </Switch>
      </Router>

      <Grid container>
        <Grid item md={12} xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Wrap>
  );
}

export default App;
