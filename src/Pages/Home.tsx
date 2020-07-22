import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Panel } from "../Components/Card/Panel";
import { Navbar } from "../Components/Navbar/Navbar";
import { Card } from "../Components/Card/Card";
import { Space } from "../Components/.Design/Spacing";

import { Content } from "../Content/Home";

import { Container, Row, Col, setConfiguration } from "react-grid-system";

export const Home = () => {
  setConfiguration({ maxScreenClass: "lg" });

  console.log(Content.consoleMessage);

  return (
    <>
      <Navbar />

      <Header headerText={Content.headerSubtext} />

      <Container>
        <Row nogutter>
          <Col>
            <Panel
              header={Content.underConstruction.header}
              date={Content.underConstruction.date}
              body={Content.underConstruction.body}
            />
          </Col>
        </Row>

        <Space height={20} />

        <Row nogutter>
          <Col md={4}>
            <Card
              header={Content.cards.tutorials.header}
              subheader={Content.cards.tutorials.subheader}
              body={Content.cards.tutorials.body}
              cardImageURL={Content.cards.tutorials.cardImageURL}
              href={Content.cards.tutorials.href}
              footerText={Content.cards.tutorials.footerText}
            />
          </Col>
          <Col md={4}>
            <Card
              header={Content.cards.facebook.header}
              subheader={Content.cards.facebook.subheader}
              body={Content.cards.facebook.body}
              cardImageURL={Content.cards.facebook.cardImageURL}
              href={Content.cards.facebook.href}
              footerText={Content.cards.facebook.footerText}
            />
          </Col>
          <Col md={4}>
            <Card
              header={Content.cards.itch.header}
              subheader={Content.cards.itch.subheader}
              body={Content.cards.itch.body}
              cardImageURL={Content.cards.itch.cardImageURL}
              href={Content.cards.itch.href}
              footerText={Content.cards.itch.footerText}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
