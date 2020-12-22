import React from "react";
import { StyledCard, StyledCardDeck } from "./CardStyling";
import { SectionHeader } from "../Typography/Typography";

export interface CardProps {
  wrapContent?: boolean;
}

export interface CardDeckProps {
  header?: string;
}

export const Card: React.FC<CardProps> = ({ wrapContent, children }) => {
  return <StyledCard wrapContent={wrapContent}>{children}</StyledCard>;
};

export const CardDeck: React.FC<CardDeckProps> = ({ header, children }) => {
  return (
    <>
      {header ? <SectionHeader>{header}</SectionHeader> : null};
      <StyledCardDeck>{children}</StyledCardDeck>)
    </>
  );
};
