import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

interface EventProps {
  title: string;
  year: string;
  winner: string;
  winningEntry: string;
  winnerHref: string;
  imageURL: string;
}

const StyledEvent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const LeftSide = styled.div``;
const StyledImage = styled.img`
  border-radius: 10px;
  width: 50%;
`;

export const Event = ({
  title,
  year,
  winner,
  winningEntry,
  winnerHref,
  imageURL,
}: EventProps) => {
  return (
    <Card>
      <StyledEvent>
        <LeftSide>
          <Typo.SectionHeader>
            {title}{" "}
            <Typo.HighlightSectionHeader color={Tokens.Colour.accent01}>
              {year}
            </Typo.HighlightSectionHeader>
          </Typo.SectionHeader>

          <Typo.PSpan>
            <strong>Winner: </strong>
          </Typo.PSpan>
          <Typo.PSpan>{winner}</Typo.PSpan>
          <br />

          <Typo.PSpan>
            <strong>Entry Title: </strong>
          </Typo.PSpan>
          <Typo.PSpan>{winningEntry}</Typo.PSpan>
          <p />
          <Button href={winnerHref} label={`Play ${winningEntry} Here`} />
          <br />
        </LeftSide>
        <StyledImage src={imageURL} alt={`${winningEntry} Screenshot`} />
      </StyledEvent>
    </Card>
  );
};
