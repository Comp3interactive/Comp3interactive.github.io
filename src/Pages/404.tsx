import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";
import * as Tokens from "../Components/.Design/Tokens";

import * as Divs from "../Components/DivBoxes/DivBox";

import { Navbar } from "../Components/Navbar/Navbar";
import { DevLog } from "../Components/Card/DevLog";
import { Button } from "../Components/Button/Button";
import styled from "@emotion/styled";

const Offset = styled.div`
  margin-top: 150px;
`;

const Image = styled.img`
  width: 25%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const FourZeroFour = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />
      <Offset />
      <Container>
        <Row>
          <Col>
            <Image src="./Images/Illustrations/404.png" />
          </Col>
        </Row>
        <Row nogutter>
          <Col>
            <DevLog
              header={"Uh oh..."}
              date={"Are you lost?"}
              body={[
                "Looks like you're trying to find a page that doesn't exist there buddy!",
                "If you think this may be an error then please contact me and let me know what's happened, otherwise, click the link below to return to the homepage.",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button label={"Return Home"} href="/#/" full={true} />
          </Col>
        </Row>
      </Container>
      <br />

      <Footer />
    </>
  );
};
