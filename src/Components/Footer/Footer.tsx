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
  color: white;
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
              <StyledFooterLinks>Facebook</StyledFooterLinks>
              <StyledFooterLinks>Instagram</StyledFooterLinks>
              <StyledFooterLinks>YouTube</StyledFooterLinks>
              <StyledFooterLinks>Discord</StyledFooterLinks>
            </Col>

            <Col md={2} offset={{ md: -4 }}>
              <StyledFooterLinkHeader>Latest Series</StyledFooterLinkHeader>
              <StyledFooterLinks>Invaders From Outerspace</StyledFooterLinks>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <CopyrightWrapper>
        <Copyright>
          Copyright &copy; Comp-3 Interactive 2019-2020. All rights reserved
        </Copyright>
      </CopyrightWrapper>
    </>
  );
};
