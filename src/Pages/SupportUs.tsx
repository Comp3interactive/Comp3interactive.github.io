import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { Panel } from "../Components/Card/Panel";
import { Button } from "../Components/Button/Button";
import { Links } from "../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col, setConfiguration } from "react-grid-system";

export const SupportUs = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Support.Us()"} />

      <Container>
        <Row nogutter>
          <Col>
            <Panel
              header={"Show Your Support <3"}
              body={[
                "So you're wondering how you can support and help us? I love you just for clicking this link!",
                "You can show support in many ways, from subscribing on YouTube and following us on Facebook and Instagram for those little Unity code snippets, tips and the occasional meme, to sharing our content with your family, friends and collegues who may be interested in game development.",
                "Comp-3 Interactive can only run if we have a dedicated fan base who enjoy the weekly content that is released. If we didn't, then who the hell are we making these videos for???",
                "We also accept Patreon subscriptions to help keep things running smoothly... The money from those donations goes towards things such as hosting this site, licencing software, advertising etc. Any amount is greatly appreciated and comes with your name in lights at the end of every video released that month!",
                "Finally, we offer YouTube video and social media sponsorship, for more information check out the tiers we have available on our Patreon page!",
                <p />,
                <Button
                  label={"Patreon"}
                  href={Links.patreon}
                  icon={Brands.faPatreon}
                  full={true}
                />,
              ]}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
