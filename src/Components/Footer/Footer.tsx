import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../../Utils/ExternalLinks";
import * as Functions from "../../Utils/Functions";
import { Link } from "../Link/Link";

const OffsetWrapper = styled.div`
  margin-top: 25px;
`;

const FooterWrapper = styled.div`
  background-color: ${Tokens.Colour.midGrey};
  min-height: 200px;
  padding: 60px 25% 10px 25%;
  color: white;
  text-align: center;
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
  color: ${Tokens.Colour.white};
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${Tokens.Colour.accent};
    text-decoration: none;
  }
`;

const CopyrightWrapper = styled.div`
  background-color: ${Tokens.Colour.midGrey};
  color: white;
  padding-bottom: 15px;
  padding-top: 25px;
  text-align: center;
  font-size: ${Tokens.Font.sizes.tiny};

  border-radius: 0px 0px 10px 10px;
`;

export const Footer = () => {
  return (
    <OffsetWrapper>
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
        You can contact us at any of the available channels and we'll be more
        than happy to have a chat.
        <p />
        For business enquiries please email us at:
        <br />
        <Link
          href={"mailto:comp3.interactive@gmail.com"}
          label={"comp3.interactive@gmail.com"}
          color={Tokens.Colour.accent}
        />
      </FooterWrapper>
      <CopyrightWrapper>
        Copyright &copy; Comp-3 Interactive 2019-{Functions.GetYear()}. All
        rights reserved
      </CopyrightWrapper>
    </OffsetWrapper>
  );
};
