import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";

export interface CardProps {
  header: string;
  date: string;
  body: string[];
}

interface CircleProps {
  color: string;
}

const CardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  transition: transform 0.2s;
  margin-bottom: 20px;
  background-color: ${Tokens.Colour.black};
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};

  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
`;

const CardBody = styled.div`
  background-color: ${Tokens.Colour.lightGrey};
  padding: 20px;
  border-radius: 0px 0px ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};
`;

const CardHeader = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 5px;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} 0px 0px;
`;

const Circle = styled.div<CircleProps>`
  border-radius: 20px 20px 20px 20px;
  margin-left: 10px;
  height: 13px;
  width: 13px;
  background-color: ${(props) => props.color};
`;

export const DevLog = ({ header, date, body }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <Circle color="#FF605C" />
        <Circle color="#FFBD44" />
        <Circle color="#00CA4E" />
        <Typo.DevLogDate>{date}</Typo.DevLogDate>
      </CardHeader>
      <CardBody>
        <Typo.StyledCardSubtitleText>{`Dev.Log('${header}');`}</Typo.StyledCardSubtitleText>
        <br />
        {body.map((paragraph, i) => (
          <Typo.StyledCardBodyText key={i}>{paragraph}</Typo.StyledCardBodyText>
        ))}
      </CardBody>
    </CardContainer>
  );
};
