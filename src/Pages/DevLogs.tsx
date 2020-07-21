import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";
import { Panel } from "../Components/Card/Panel";

export const DevLogs = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Dev.Logs()"} />

      <Container>
        <Row nogutter>
          <Col>
            <Panel
              header={"My first devlog"}
              date={"30/11/1990"}
              body={[
                "This is a sample devlog post, please be aware that this may change at some point in the near future as I just wanted to test the page was working.",
                "In fact... If you are reading this then please leave... This page is not available to the pulic yet to STOP FORCING YOURSELF DOWN MY ROUTES",
              ]}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
