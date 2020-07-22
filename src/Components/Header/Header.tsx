import React from "react";
import styled from "@emotion/styled";
import { HeaderDiv } from "../DivBoxes/DivBox";
import * as Typo from "../Typography/Typography";

export interface HeaderProps {
  headerText: string;
}

const HeaderWrapper = styled.div`
  min-height: 100px;
  padding: 25px 10px 10px 10px;
  margin-top: 75px;
`;

const ImageWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

export const Header = ({ headerText }: HeaderProps) => {
  return (
    <>
      <HeaderDiv>
        <HeaderWrapper>
          <ImageWrapper src="./Images/Bottlecaps/comp3.png" />
          <Typo.StyledHeader>{headerText}</Typo.StyledHeader>
        </HeaderWrapper>
      </HeaderDiv>
    </>
  );
};
