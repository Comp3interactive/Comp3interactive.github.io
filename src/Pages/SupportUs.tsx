import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";

export const SupportUs = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Support.Us()"} />

      <Container>
        <Row nogutter>
          <Col>You can support us over at Patreon</Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
