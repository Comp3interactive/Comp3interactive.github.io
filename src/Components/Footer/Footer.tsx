import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";
import { Links } from "../../Utils/ExternalLinks";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  height: 40px;
  background-color: ${Tokens.Colour.midGrey};
  margin: 20px 10px 10px 10px;
  padding: 10px;
`;

const IconWrapper = styled.a`
  color: ${Tokens.Colour.offWhite};
  font-size: ${Tokens.FontSize.medium};
  margin: 5px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Typo.Copyright>
        Copyright © Comp-3 Interactive 2019-2021. All rights reserved
      </Typo.Copyright>
      <div>
        <IconWrapper href={Links.youtube} target="_blank">
          <FontAwesomeIcon icon={Brands.faYoutube} />
        </IconWrapper>
        <IconWrapper href={Links.facebook} target="_blank">
          <FontAwesomeIcon icon={Brands.faFacebook} />
        </IconWrapper>
        <IconWrapper href={Links.twitter} target="_blank">
          <FontAwesomeIcon icon={Brands.faTwitter} />
        </IconWrapper>
        <IconWrapper href={Links.patreon} target="_blank">
          <FontAwesomeIcon icon={Brands.faPatreon} />
        </IconWrapper>
      </div>
    </StyledFooter>
  );
};
