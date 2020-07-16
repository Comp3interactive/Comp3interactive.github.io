import React from "react";

import { Card } from "../Components/Card/Card";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col } from "react-grid-system";
import styled from "@emotion/styled";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

export const ComponentPlayground = () => {
  return (
    <>
      <Header />
      <Container>
        <Row nogutter>
          <Col md={4}>
            <Card
              header="LEARN"
              subheader="Come learn to code"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
              cardImageURL="./Images/TestImage.jpeg"
              href="https://www.google.com"
              footerText="Learn More →"
            />
          </Col>
          <Col md={4}>
            <Card
              header="CODE"
              subheader="I can teach you how to code"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
              cardImageURL="./Images/TestImage.jpeg"
            />
          </Col>
          <Col md={4}>
            <Card
              header="FREE STUFF"
              subheader="I give away assets and stuff"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
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
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
                cardImageURL="./Images/TestImage.jpeg"
                href="https://www.google.com"
                footerText="Learn More →"
              />
            </Col>
            <Col md={4}>
              <Card
                header="CODE"
                subheader="I can teach you how to code"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
                cardImageURL="./Images/TestImage.jpeg"
              />
            </Col>
            <Col md={4}>
              <Card
                header="FREE STUFF"
                subheader="I give away assets and stuff"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
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
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
              cardImageURL="./Images/TestImage.jpeg"
              href="https://www.google.com"
              footerText="Learn More →"
            />
          </Col>
          <Col md={4}>
            <Card
              header="CODE"
              subheader="I can teach you how to code"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
              cardImageURL="./Images/TestImage.jpeg"
            />
          </Col>
          <Col md={4}>
            <Card
              header="FREE STUFF"
              subheader="I give away assets and stuff"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
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
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
                cardImageURL="./Images/TestImage.jpeg"
                href="https://www.google.com"
                footerText="Learn More →"
              />
            </Col>
            <Col md={4}>
              <Card
                header="CODE"
                subheader="I can teach you how to code"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
                cardImageURL="./Images/TestImage.jpeg"
              />
            </Col>
            <Col md={4}>
              <Card
                header="FREE STUFF"
                subheader="I give away assets and stuff"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet varius turpis, at porttitor nulla malesuada ut. Sed eu scelerisque est. Ut in lectus orci. Morbi nec nisl libero. Pellentesque in enim elit. Suspendisse suscipit risus eget velit lacinia scelerisque. Vivamus sed consectetur sapien, quis pellentesque elit. Pellentesque lobortis libero sem, vitae dapibus nisi finibus sed. Etiam sit amet erat sodales turpis volutpat tristique. Sed et venenatis felis."
                cardImageURL="./Images/TestImage.jpeg"
                footerText="Learn More →"
              />
            </Col>
          </Row>
        </Container>
      </Divs.LeftSideThick>

      <Footer />
    </>
  );
};
