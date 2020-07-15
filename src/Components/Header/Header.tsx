import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { DarkGreyToGreenDiv } from "../DivBoxes/DivBox";

const HeaderWrapper = styled.div`
  min-height: 300px;
  padding: 25px 10px 10px 10px;
  margin-bottom: 50px;
`;

export const Header = () => {
  return (
    <>
      <DarkGreyToGreenDiv>
        <HeaderWrapper>HEADER GOES HERE</HeaderWrapper>
      </DarkGreyToGreenDiv>
    </>
  );
};
