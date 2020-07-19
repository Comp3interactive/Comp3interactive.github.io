import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import {
  StyledCardSubtitleText,
  StyledCardHeaderText,
  StyledCardBodyText,
  StyledCardFooterText,
} from "../Typography/Typography";

export interface CardProps {
  header?: string;
  subheader?: string;
  body: string[];
  cardImageURL: string;
  href?: string;
  footerText?: string;
}

const CardContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  transition: transform 0.2s;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};

  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const LinkBoxWrapper = styled.a`
  text-decoration: none;
`;

const CardBody = styled.div`
  min-height: 200px;
  background-color: ${Tokens.Colour.lightGrey};
  padding: 20px;
`;

const CardFooter = styled.div`
  border-radius: 0 0 ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};
  background-color: ${Tokens.Colour.black};
  padding: 10px;
  text-align: right;
  min-height: 15px;
`;

const CardheaderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} 0 0;
  opacity: 0.2;
`;

const CardheaderImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  background: ${Tokens.Colour.black};
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} 0 0;
  border-bottom: 3px solid ${Tokens.Colour.darkGrey};
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = ({
  header,
  subheader,
  body,
  cardImageURL,
  href,
  footerText,
}: CardProps) => {
  return (
    <CardContainer>
      <LinkBoxWrapper href={href}>
        <CardheaderImageContainer>
          <CardheaderImage src={cardImageURL} />
          <TextWrapper>
            <StyledCardHeaderText>{header}</StyledCardHeaderText>
          </TextWrapper>
        </CardheaderImageContainer>
        <CardBody>
          <StyledCardSubtitleText>{subheader}</StyledCardSubtitleText>
          <br />
          {body.map((paragraph, i) => (
            <StyledCardBodyText key={i}>{paragraph}</StyledCardBodyText>
          ))}
        </CardBody>
        <CardFooter>
          <StyledCardFooterText>{footerText}</StyledCardFooterText>
        </CardFooter>
      </LinkBoxWrapper>
    </CardContainer>
  );
};
