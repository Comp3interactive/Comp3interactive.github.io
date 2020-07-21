import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import {
  StyledFooterLinkHeader,
  StyledFooterLinks,
  Copyright,
} from "../Typography/Typography";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../../Utils/ExternalLinks";
import { Container, Row, Col } from "react-grid-system";
import * as Functions from "../../Utils/Functions";
import { Link } from "../Link/Link";

const FooterWrapper = styled.div`
  background-color: ${Tokens.Colour.black};
  min-height: 200px;
  padding: 60px 10px 10px 10px;
`;

const LogoWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  margin-bottom: -60px;
`;

const IconWrapper = styled.div`
  text-align: center;
  font-size: 35px;
  color: white;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const LinkWrapper = styled.a`
  color: ${Tokens.Colour.white};
  padding: 10px;
`;

const CopyrightWrapper = styled.div`
  background-color: ${Tokens.Colour.black};
  padding-bottom: 15px;
  padding-top: 25px;
  text-align: center;
  font-size: ${Tokens.Font.sizes.tiny};
`;

export const Footer = () => {
  return (
    <>
      <LogoWrapper src="./Images/Bottlecaps/comp3.png" />
      <FooterWrapper>
        <IconWrapper>
          <LinkWrapper href={Links.youtube}>
            <FontAwesomeIcon icon={Brands.faYoutube} />
          </LinkWrapper>
          <LinkWrapper href={Links.facebook}>
            <FontAwesomeIcon icon={Brands.faFacebook} />
          </LinkWrapper>
          <LinkWrapper href={Links.instagram}>
            <FontAwesomeIcon icon={Brands.faInstagram} />
          </LinkWrapper>
          <LinkWrapper href={Links.discord}>
            <FontAwesomeIcon icon={Brands.faDiscord} />
          </LinkWrapper>
        </IconWrapper>

        <Container fluid>
          <Row nogutter>
            <Col md={2} offset={{ md: 4 }}>
              <StyledFooterLinkHeader>
                Find Us Everywhere
              </StyledFooterLinkHeader>

              <StyledFooterLinks>
                <Link href={Links.youtube} label="YouTube" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.facebook} label="Facebook" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.instagram} label="Instagram" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.discord} label="Discord" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.twitter} label="Twitter" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.github} label="GitHub" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.itch} label="Itch.io" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.googleplay} label="Google Play" />
              </StyledFooterLinks>
              <StyledFooterLinks>
                <Link href={Links.patreon} label="Patreon" />
              </StyledFooterLinks>
            </Col>

            <Col md={2} offset={{ md: -4 }}>
              <StyledFooterLinkHeader>Latest Series</StyledFooterLinkHeader>
              <StyledFooterLinks>
                <Link href={Links.invaders} label="Invaders From Outerspace" />
              </StyledFooterLinks>

              <StyledFooterLinkHeader>Contact Us</StyledFooterLinkHeader>
              <StyledFooterLinks>
                You can contact us at any of the available channels and we'll be
                more than happy to have a chat.
                <p />
                For business enquiries please email us at:
                <br />
                <Link
                  href={"mailto:comp3.interactive@gmail.com"}
                  label={"comp3.interactive@gmail.com"}
                  color={Tokens.Colour.green}
                />
              </StyledFooterLinks>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <CopyrightWrapper>
        <Copyright>
          Copyright &copy; Comp-3 Interactive 2019-{Functions.GetYear()}. All
          rights reserved
        </Copyright>
      </CopyrightWrapper>
    </>
  );
};
