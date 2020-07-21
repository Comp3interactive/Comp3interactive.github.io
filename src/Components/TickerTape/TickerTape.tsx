import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";

export interface TickerProps {
  tickerText: string;
}

const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0px;
  width: 100%;

  padding: 10px;

  background-color: ${Tokens.Colour.black};
  text-align: center;
  color: ${Tokens.Colour.white};

  z-index: 2;
`;

export const TickerTape = ({ tickerText }: TickerProps) => {
  return (
    <>
      <TickerWrapper>
        <Typo.Copyright>{tickerText}</Typo.Copyright>
      </TickerWrapper>
    </>
  );
};
