import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Panel } from "../Components/Card/Panel";
import { Space } from "../Components/.Design/Spacing";

import * as Typo from "../Components/Typography/Typography";
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
        <Row>
          <Col>
            <Typo.SubHeader>Latest Assets</Typo.SubHeader>
          </Col>
        </Row>
        {Content.recentAssets.map((asset, i) => (
          <Row key={i}>
            <Col>
              <iframe
                frameBorder="0"
                src={`https://itch.io/embed/${asset.embeddedID}?bg_color=0D1B1E&fg_color=f1f1f8&link_color=61892f&border_color=61892f&`}
                width="100%"
                height="167"
              >
                <a href={asset.href}>{asset.title}</a>
              </iframe>
              <Space height={20} />
            </Col>
          </Row>
        ))}
      </Container>

      <Footer />
    </>
  );
};
