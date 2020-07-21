import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Panel } from "../Components/Card/Panel";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";

export const Home = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Subscribe.Follow.Learn()"} />

      <Container>
        <Row nogutter>
          <Col>
            <Panel
              header={"We are currently revamping our website"}
              date={"21/07/2020"}
              body={[
                "As the title suggests, we are currently performing a complete overhaul on our website, this may take a little time so please bare with us! It's going to look GREAT when we're finished!",
                "For the time being, you can always contact us at the links below!",
              ]}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
