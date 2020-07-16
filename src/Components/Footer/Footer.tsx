import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import {
  StyledCardSubtitleText,
  StyledCardHeaderText,
  StyledCardBodyText,
  StyledCardFooterText,
} from "../Typography/Typography";

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

export const Footer = () => {
  return (
    <>
      <LogoWrapper src="./Images/Bottlecaps/comp3.png" />
      <FooterWrapper>
        <StyledCardBodyText>Testing the footer stuff</StyledCardBodyText>
        <StyledCardBodyText>Need social icons here</StyledCardBodyText>
        <StyledCardBodyText>Need contact details here</StyledCardBodyText>
        <StyledCardBodyText>Need copyright here</StyledCardBodyText>
      </FooterWrapper>
    </>
  );
};
