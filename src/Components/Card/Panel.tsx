import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../Button/Button";
import { Container, Row, Col, setConfiguration } from "react-grid-system";

export interface CardProps {
  header: string;
  date?: string;
  body: any[];
  imgUrl?: string;
  buttons?: {
    buttonText: string;
    buttonHref: string;
    buttonIcon?: IconDefinition;
  }[];
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
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} 0px 0px;
`;

const Circle = styled.div<CircleProps>`
  display: inline-block;
  border-radius: 20px 20px 20px 20px;
  margin-left: 10px;
  height: 13px;
  width: 13px;
  background-color: ${(props) => props.color};
`;

const StyledImage = styled.img`
  max-width: 30%;
  max-height: 30%;
  padding-bottom: 10px;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} 0 0;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall} ${Tokens.Styling.roundedBorderSmall}
    ${Tokens.Styling.roundedBorderSmall};
`;

const CardheaderImageContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const Panel = ({ header, date, body, buttons, imgUrl }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <div>
          <Circle color="#FF605C" />
          <Circle color="#FFBD44" />
          <Circle color="#00CA4E" />
        </div>
        <Typo.DevLogDate>{date}</Typo.DevLogDate>
      </CardHeader>
      <CardBody>
        <Typo.StyledCardSubtitleText>{header}</Typo.StyledCardSubtitleText>
        <br />
        {body.map((paragraph, i) => (
          <Typo.StyledCardBodyText key={i}>{paragraph}</Typo.StyledCardBodyText>
        ))}
        <br />
        {imgUrl ? (
          <CardheaderImageContainer>
            <StyledImage src={imgUrl} />
          </CardheaderImageContainer>
        ) : null}

        {buttons
          ? buttons.map((buttonData, i) => (
              <div key={i}>
                <br />
                <Button
                  label={buttonData.buttonText}
                  href={buttonData.buttonHref}
                  icon={buttonData.buttonIcon}
                  full={true}
                />
              </div>
            ))
          : null}
      </CardBody>
    </CardContainer>
  );
};

export const ImagePanel = ({
  header,
  date,
  body,
  buttons,
  imgUrl,
}: CardProps) => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <div>
            <Circle color="#FF605C" />
            <Circle color="#FFBD44" />
            <Circle color="#00CA4E" />
          </div>
          <Typo.DevLogDate>{date}</Typo.DevLogDate>
        </CardHeader>
        <CardBody>
          <Typo.StyledCardSubtitleText>{header}</Typo.StyledCardSubtitleText>
          <br />
          <Row>
            <Col md={6}>
              {imgUrl ? (
                <CardheaderImageContainer>
                  <BigImage src={imgUrl} />
                </CardheaderImageContainer>
              ) : null}
            </Col>
            <Col md={6}>
              {body.map((paragraph, i) => (
                <Typo.StyledCardBodyText key={i}>
                  {paragraph}
                </Typo.StyledCardBodyText>
              ))}
            </Col>
          </Row>

          {buttons
            ? buttons.map((buttonData, i) => (
                <div key={i}>
                  <br />
                  <Button
                    label={buttonData.buttonText}
                    href={buttonData.buttonHref}
                    icon={buttonData.buttonIcon}
                    full={true}
                  />
                </div>
              ))
            : null}
        </CardBody>
      </CardContainer>
    </Container>
  );
};
