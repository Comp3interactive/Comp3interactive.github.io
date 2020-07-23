import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Panel, ImagePanel } from "../Components/Card/Panel";
import { Navbar } from "../Components/Navbar/Navbar";
import { Card } from "../Components/Card/Card";
import { Space } from "../Components/.Design/Spacing";
import * as Divs from "../Components/DivBoxes/DivBox";
import * as Tokens from "../Components/.Design/Tokens";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Typo from "../Components/Typography/Typography";

import { Content } from "../Content/Home";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { Links } from "../Utils/ExternalLinks";

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
              header={Content.welcomeBar.header}
              date={Content.welcomeBar.date}
              body={Content.welcomeBar.body}
              buttons={[
                {
                  buttonText: "Start Learning Now",
                  buttonHref: Links.youtube,
                  buttonIcon: Brands.faYoutube,
                },
              ]}
            />
          </Col>
        </Row>
      </Container>

      <Space height={20} />

      <Divs.LeftSideThick color={Tokens.Colour.black}>
        <Container>
          <Row nogutter>
            <Col>
              <Typo.SubHeader>Where can you find us?</Typo.SubHeader>
              <Space height={30} />
            </Col>
          </Row>
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
                header={Content.cards.instagram.header}
                subheader={Content.cards.instagram.subheader}
                body={Content.cards.instagram.body}
                cardImageURL={Content.cards.instagram.cardImageURL}
                href={Content.cards.instagram.href}
                footerText={Content.cards.instagram.footerText}
              />
            </Col>
          </Row>
        </Container>
      </Divs.LeftSideThick>

      <Container>
        <Row nogutter>
          <Col>
            <Typo.SubHeader>Do we make games?</Typo.SubHeader>
            <Space height={20} />
          </Col>
        </Row>
        <Row nogutter>
          <Col>
            <Panel
              header={Content.devlogBar.header}
              date={Content.devlogBar.date}
              body={Content.devlogBar.body}
              buttons={[
                {
                  buttonText: "Check Out What We're Up To",
                  buttonHref: "/#/Devlogs",
                },
              ]}
              imgUrl="./Images/Illustrations/devlog.png"
            />
          </Col>
        </Row>
      </Container>

      <Divs.LeftSideThick color={Tokens.Colour.black}>
        <Container>
          <Row nogutter>
            <Col>
              <Typo.SubHeader>What do we have for you?</Typo.SubHeader>
              <Space height={30} />
            </Col>
          </Row>
          <Row nogutter>
            <Col md={4}>
              <Card
                header={Content.cards.discord.header}
                subheader={Content.cards.discord.subheader}
                body={Content.cards.discord.body}
                cardImageURL={Content.cards.discord.cardImageURL}
                href={Content.cards.discord.href}
                footerText={Content.cards.discord.footerText}
              />
            </Col>
            <Col md={4}>
              <Card
                header={Content.cards.assets.header}
                subheader={Content.cards.assets.subheader}
                body={Content.cards.assets.body}
                cardImageURL={Content.cards.assets.cardImageURL}
                href={Content.cards.assets.href}
                footerText={Content.cards.assets.footerText}
              />
            </Col>
            <Col md={4}>
              <Card
                header={Content.cards.support.header}
                subheader={Content.cards.support.subheader}
                body={Content.cards.support.body}
                cardImageURL={Content.cards.support.cardImageURL}
                href={Content.cards.support.href}
                footerText={Content.cards.support.footerText}
              />
            </Col>
          </Row>
        </Container>
      </Divs.LeftSideThick>

      <ImagePanel
        header={Content.latestSeries.header}
        date={Content.latestSeries.date}
        body={Content.latestSeries.body}
        buttons={[
          {
            buttonText: "Watch The Series Here",
            buttonHref: Links.invaders,
            buttonIcon: Brands.faYoutube,
          },
          {
            buttonText: "Download The Assets",
            buttonHref: Links.itch,
            buttonIcon: Brands.faItchIo,
          },
        ]}
        imgUrl={Content.latestSeries.imgUrl}
      />

      <Space height={20} />

      <Footer />
    </>
  );
};
