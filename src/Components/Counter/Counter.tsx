import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  height: 50px;
  margin: 5px 10px 5px 10px;
`;

const StyledNumber = styled.div`
  font-size: ${Tokens.FontSize.medium};
  font-weight: ${Tokens.FontWeight.bold};
  color: ${Tokens.Colour.accent01};
  margin-right: 5px;
`;

const StyledText = styled.div`
  font-size: ${Tokens.FontSize.small};
  font-weight: ${Tokens.FontWeight.light};
  color: ${Tokens.Colour.offWhite};
`;

interface CounterProps {
  numberValue: string;
  text: string;
}

export const Counter = ({ numberValue, text }: CounterProps) => {
  return (
    <StyledCounter>
      <StyledNumber>{numberValue}</StyledNumber>
      <StyledText>{text}</StyledText>
    </StyledCounter>
  );
};
