import React from "react";

import { Card } from "../Components/Card/Card";
import { Panel } from "../Components/Card/Panel";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";

export const ComponentPlayground = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Component.Playground()"} />

      <Container>
        <Row nogutter>
          <Col md={4}>
            <Card
              header="LEARN"
              subheader="Come learn to code"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
              href="https://www.google.com"
              footerText="Learn More →"
            />
          </Col>
          <Col md={4}>
            <Card
              header="CODE"
              subheader="I can teach you how to code"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
            />
          </Col>
          <Col md={4}>
            <Card
              header="FREE STUFF"
              subheader="I give away assets and stuff"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
              footerText="Learn More →"
            />
          </Col>
        </Row>
      </Container>

      <Divs.RightSideThick color={Tokens.Colour.mediumGrey}>
        <Container>
          <Row nogutter>
            <Col md={4}>
              <Card
                header="LEARN"
                subheader="Come learn to code"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
                href="https://www.google.com"
                footerText="Learn More →"
              />
            </Col>
            <Col md={4}>
              <Card
                header="CODE"
                subheader="I can teach you how to code"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
              />
            </Col>
            <Col md={4}>
              <Card
                header="FREE STUFF"
                subheader="I give away assets and stuff"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
                footerText="Learn More →"
              />
            </Col>
          </Row>
        </Container>
      </Divs.RightSideThick>

      <Container>
        <Row nogutter>
          <Col md={4}>
            <Card
              header="LEARN"
              subheader="Come learn to code"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
              href="https://www.google.com"
              footerText="Learn More →"
            />
          </Col>
          <Col md={4}>
            <Card
              header="CODE"
              subheader="I can teach you how to code"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
            />
          </Col>
          <Col md={4}>
            <Card
              header="FREE STUFF"
              subheader="I give away assets and stuff"
              body={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
              ]}
              cardImageURL="./Images/TestImage.jpeg"
              footerText="Learn More →"
            />
          </Col>
        </Row>
      </Container>

      <Divs.LeftSideThick color={Tokens.Colour.mediumGrey} showBottom={false}>
        <Container>
          <Row nogutter>
            <Col md={4}>
              <Card
                header="LEARN"
                subheader="Come learn to code"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
                href="https://www.google.com"
                footerText="Learn More →"
              />
            </Col>
            <Col md={4}>
              <Card
                header="CODE"
                subheader="I can teach you how to code"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
              />
            </Col>
            <Col md={4}>
              <Card
                header="FREE STUFF"
                subheader="I give away assets and stuff"
                body={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis.",
                ]}
                cardImageURL="./Images/TestImage.jpeg"
                footerText="Learn More →"
              />
            </Col>
          </Row>
        </Container>
      </Divs.LeftSideThick>

      <Container>
        <Row>
          <Col>
            <Panel
              header={"Test dev log"}
              date={"30/11/1990"}
              body={["Test body paragraph", "Another body paragraph"]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Panel
              header={"Another dev log"}
              date={"30/11/2020"}
              body={["Test body paragraph", "Another body paragraph"]}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
