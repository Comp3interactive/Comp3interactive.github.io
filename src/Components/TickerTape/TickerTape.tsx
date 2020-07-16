import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { StyledText } from "../Typography/Typography";

export interface TickerProps {
  tickerText: string;
}

const TickerWrapper = styled.div`
  background-color: ${Tokens.Colour.black};
  text-align: center;
  color: ${Tokens.Colour.white};
`;

export const TickerTape = ({ tickerText }: TickerProps) => {
  return (
    <>
      <TickerWrapper>
        <StyledText>{tickerText}</StyledText>
      </TickerWrapper>
    </>
  );
};
