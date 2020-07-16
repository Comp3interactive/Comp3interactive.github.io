import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { StyledSubHeader } from "../Typography/Typography";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../../Utils/ExternalLinks";

const FooterWrapper = styled.div`
  background-color: ${Tokens.Colour.black};
  min-height: 200px;
  padding: 60px 10px 10px 10px;
  text-align: center;
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
`;

const LinkWrapper = styled.a`
  color: white;
  padding: 10px;
`;

export const Footer = () => {
  return (
    <>
      <LogoWrapper src="./Images/Bottlecaps/comp3.png" />
      <FooterWrapper>
        <StyledSubHeader>Quick links</StyledSubHeader>
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
      </FooterWrapper>
    </>
  );
};
