import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { HeaderDiv } from "../DivBoxes/DivBox";
import * as Typo from "../Typography/Typography";

const HeaderWrapper = styled.div`
  min-height: 100px;
  padding: 25px 10px 10px 10px;
  margin-bottom: 50px;
`;

const HeaderTop = styled.div`
  background-color: ${Tokens.Colour.black};
`;

const ImageWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

export const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderDiv>
        <HeaderWrapper>
          <ImageWrapper src="./Images/Bottlecaps/comp3.png" />
          <Typo.StyledHeader>COMP-3 INTERACTIVE</Typo.StyledHeader>
          <Typo.StyledSubHeader>Subscribe.Follow.Learn()</Typo.StyledSubHeader>
        </HeaderWrapper>
      </HeaderDiv>
    </>
  );
};
