import React from "react";

import * as Brands from "@fortawesome/free-brands-svg-icons";
import { Content } from "../Content/NewHome";
import { Container, Row, Col, setConfiguration } from "react-grid-system";

import {
  PageWrapper,
  TickerTape,
  Footer,
  H1,
  LinkCard,
  P,
  Button,
} from "../Components";
import styled from "@emotion/styled";
import { Links } from "../Utils/ExternalLinks";
import { H2 } from "../Components/Typography/Typo";

export const StyledCard = styled.div`
  margin: 0px 20px;
  background-image: linear-gradient(to bottom right, #626374, #454757);

  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 1);
`;

export const StyledLearnButton = styled.div`
  margin: 20px 10px;
`;

export const StyledVideo = styled.iframe`
  border-radius: 10px 10px 0px 0px;
  border: none;

  width: 100%;
  height: 240px;
`;

export const StyledImage = styled.img`
  border-radius: 10px;

  display: block;
  margin-left: auto;
  margin-right: auto;

  -webkit-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
`;

export const StyledHeader = styled.img`
  border-radius: 10px 10px 0px 0px;

  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  -webkit-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
`;

export const VerticalDivider = styled.div`
  background-color: #3d3f4a;
  height: auto;
  width 2px;
`;

export const Home = () => {
  setConfiguration({ maxScreenClass: "lg" });

  console.log(Content.consoleMessage);

  return (
    <Container>
      <TickerTape tickerText="Consider supporting us on Patreon!" />
      <PageWrapper>
        <StyledHeader src={"./Images/HeaderSizer.png"} />

        {/* LEFT SIDE */}
        <Row nogutter>
          <Col md={7}>
            <H1>{Content.H1.aboutComp3}</H1>
            <Row nogutter>
              <StyledCard>
                <Col md={12}>
                  {Content.mainCardText.map((paragraph, i) => (
                    <P key={i}>{paragraph}</P>
                  ))}

                  <StyledLearnButton>
                    <Button
                      href={Links.youtube}
                      label="Start Learning"
                      width={"100%"}
                      icon={Brands.faYoutube}
                    />
                  </StyledLearnButton>
                </Col>
              </StyledCard>
            </Row>

            <H1>{Content.H1.recommended}</H1>
            <Row nogutter>
              <StyledCard>
                {Content.recommendedText.map((paragraph, i) => (
                  <P key={i}>{paragraph}</P>
                ))}

                <StyledImage
                  src={"./Images/InvadersFromOuterspace.png"}
                  width={"70%"}
                />

                <StyledLearnButton>
                  <Button
                    href={Links.invaders}
                    label="Go To Series"
                    width={"100%"}
                    icon={Brands.faYoutube}
                  />
                </StyledLearnButton>
              </StyledCard>
            </Row>

            <H1>{Content.H1.upcoming}</H1>
            <Row nogutter>
              <StyledCard>
                {Content.upcomingEventText.map((paragraph, i) => (
                  <P key={i}>{paragraph}</P>
                ))}
              </StyledCard>
            </Row>
          </Col>
          <VerticalDivider />
          {/* RIGHT SIDE */}
          <Col md={4.9}>
            <H1>{Content.H1.findUs}</H1>
            <StyledCard>
              <Row nogutter>
                <StyledVideo
                  src="https://www.youtube.com/embed/J4DxV_ZIIjE"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </Row>

              {Content.findUsContent.map((contentLink, i) => (
                <>
                  <H2>{contentLink.header}</H2>
                  {contentLink.links.map((link, ii) => (
                    <Row nogutter>
                      <LinkCard
                        header={link.header}
                        body={link.body}
                        icon={link.icon}
                        href={link.href}
                      />
                    </Row>
                  ))}
                </>
              ))}
            </StyledCard>
          </Col>
        </Row>
        <Footer />
      </PageWrapper>
    </Container>
  );
};
