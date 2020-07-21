import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import {
  StyledCardSubtitleText,
  StyledCardHeaderText,
  StyledCardBodyText,
  StyledCardFooterText,
} from "../Typography/Typography";

export interface PanelProps {
  subheader?: string;
  body: any[];
}

const CardContainer = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
  }

  padding: 20px;
  margin: 0 auto;
  width: 75%;
  margin-bottom: 20px;
  background-color: ${Tokens.Colour.lightGrey};
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};

  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
`;

export const BasicPanel = ({ subheader, body }: PanelProps) => {
  return (
    <CardContainer>
      <StyledCardSubtitleText>{subheader}</StyledCardSubtitleText>
      <br />
      {body.map((paragraph, i) => (
        <StyledCardBodyText key={i}>{paragraph}</StyledCardBodyText>
      ))}
    </CardContainer>
  );
};
