import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

interface CardProps {
  children: React.ReactNode;
}

const StyledCard = styled.div`
  min-width: 100px;
  height: auto;
  background-color: ${Tokens.Colour.midGrey};
  margin: 20px;
  border-radius: 5px;
  padding: 1px 20px;
`;

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
