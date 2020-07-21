import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";

export const AssetCollections = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Asset.Collections()"} />

      <Container>
        <Row nogutter>
          <Col></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
