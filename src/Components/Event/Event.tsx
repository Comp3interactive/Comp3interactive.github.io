import React from "react";
import { StyledTag, Styledlink } from "./EventStyling";
import { P, SubHeader } from "../Typography/Typography";
import { Card } from "../Card/Card";
import { StyledEvent } from "../../Pages/Content/Home";

export interface EventProps {
  eventName: string;
  eventLink: string;
  theme: string;
  winnerName: string;
  winnerLink: string;
}

export const Event = ({
  eventName,
  eventLink,
  theme,
  winnerName,
  winnerLink,
}: EventProps) => {
  return (
    <StyledEvent>
      <SubHeader>{eventName}</SubHeader>
      <Card wrapContent={true}>
        <P>
          <StyledTag>JAM:</StyledTag>
          <Styledlink target="_blank" href={eventLink}>
            <br />
            {"JOIN HERE!"}
          </Styledlink>
        </P>
        <P>
          <StyledTag>THEME: </StyledTag> <br />
          {theme}
        </P>

        <P>
          <StyledTag>WINNER: </StyledTag> <br />
          {winnerName}
        </P>
        <P>
          <StyledTag>WINNING ENTRY: </StyledTag>
          <Styledlink target="_blank" href={winnerLink}>
            <br />
            {"SEE THE WINNER HERE"}
          </Styledlink>
        </P>
      </Card>
    </StyledEvent>
  );
};
