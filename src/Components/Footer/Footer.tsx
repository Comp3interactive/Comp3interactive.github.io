import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../../Utils/ExternalLinks";
import { Container, Row, Col } from "react-grid-system";
import * as Functions from "../../Utils/Functions";
import { Link } from "../Link/Link";

const FooterWrapper = styled.div`
  background-color: black;
  min-height: 200px;
  padding: 60px 10px 10px 10px;
  color: white;
`;

const LogoWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  margin-bottom: -70px;
`;

const IconWrapper = styled.div`
  text-align: center;
  font-size: 35px;
  color: white;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const LinkWrapper = styled.a`
  color: ${Tokens.Colour.offWhite};
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${Tokens.Colour.offWhite};
    text-decoration: none;
  }
`;

const CopyrightWrapper = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 15px;
  padding-top: 25px;
  text-align: center;
  font-size: ${Tokens.Font.sizes.tiny};

  border-radius: 0px 0px 10px 10px;
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
              Find Us Everywhere
              <Link href={Links.youtube} label="YouTube" />
              <Link href={Links.facebook} label="Facebook" />
              <Link href={Links.instagram} label="Instagram" />
              <Link href={Links.discord} label="Discord" />
              <Link href={Links.twitter} label="Twitter" />
              <Link href={Links.github} label="GitHub" />
              <Link href={Links.itch} label="Itch.io" />
              <Link href={Links.googleplay} label="Google Play" />
              <Link href={Links.patreon} label="Patreon" />
            </Col>

            <Col md={2} offset={{ md: -4 }}>
              Contact Us You can contact us at any of the available channels and
              we'll be more than happy to have a chat.
              <p />
              For business enquiries please email us at:
              <br />
              <Link
                href={"mailto:comp3.interactive@gmail.com"}
                label={"comp3.interactive@gmail.com"}
                color={Tokens.Colour.seafoamGreen}
              />
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <CopyrightWrapper>
        Copyright &copy; Comp-3 Interactive 2019-{Functions.GetYear()}. All
        rights reserved
      </CopyrightWrapper>
    </>
  );
};
