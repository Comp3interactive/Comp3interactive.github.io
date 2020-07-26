import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Panel } from "../Components/Card/Panel";

import * as Brands from "@fortawesome/free-brands-svg-icons";

import { Content } from "../Content/Assets";

import { Container, Row, Col, setConfiguration } from "react-grid-system";

import { Navbar } from "../Components/Navbar/Navbar";
import { Links } from "../Utils/ExternalLinks";

export const AssetCollections = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Asset.Collections()"} />

      <Container>
        <Row>
          <Col md={6}>
            <Panel
              header={Content.itch.header}
              body={Content.itch.body}
              buttons={[
                {
                  buttonText: "Download Assets Here",
                  buttonHref: Links.itch,
                  buttonIcon: Brands.faItchIo,
                },
              ]}
            />
          </Col>
          <Col md={6}>
            <Panel
              header={Content.github.header}
              body={Content.github.body}
              buttons={[
                {
                  buttonText: "Download Code Here",
                  buttonHref: Links.github,
                  buttonIcon: Brands.faGithub,
                },
              ]}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
