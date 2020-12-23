import React from "react";
import { StyledCard, StyledCardDeck } from "./CardStyling";
import { SectionHeader } from "../Typography/Typography";

export interface CardProps {
  wrapContent?: boolean;
  width?: string;
}

export interface CardDeckProps {
  header?: string;
}

export const Card: React.FC<CardProps> = ({ wrapContent, width, children }) => {
  return (
    <StyledCard wrapContent={wrapContent} width={width}>
      {children}
    </StyledCard>
  );
};

export const CardDeck: React.FC<CardDeckProps> = ({ header, children }) => {
  return (
    <>
      {header ? <SectionHeader>{header}</SectionHeader> : null};
      <StyledCardDeck>{children}</StyledCardDeck>)
    </>
  );
};
