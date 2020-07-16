import React from "react";

import { Card } from "../Components/Card/Card";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { TickerTape } from "../Components/TickerTape/TickerTape";

import { Container, Row, Col } from "react-grid-system";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1000px;
`;

export const ComponentPlayground = () => {
  return (
    <>
      <TickerTape tickerText="Check out the latest videos" />
      <Header />
      <GridContainer>
        <Container fluid>
          <Row nogutter>
            <Col md={4}>
              <Card
                header="LEARN"
                subheader="Come learn to code"
                body="Learn coding with me for shits and giggles"
                cardImageURL="./Images/TestImage.jpeg"
                href="https://www.google.com"
                footerText="Learn More →"
              />
            </Col>
            <Col md={4}>
              <Card
                header="CODE"
                subheader="I can teach you how to code"
                body="I know how to code, do you?"
                cardImageURL="./Images/TestImage.jpeg"
              />
            </Col>
            <Col md={4}>
              <Card
                header="FREE STUFF"
                subheader="Ya cheap bastards"
                body="I give away free stuff every now and again"
                cardImageURL="./Images/TestImage.jpeg"
                footerText="Learn More →"
              />
            </Col>
          </Row>
        </Container>
      </GridContainer>

      <Footer />
    </>
  );
};
