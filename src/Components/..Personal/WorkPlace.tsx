import React from "react";
import { Text } from "./Typography";
import styled from "@emotion/styled";
import * as Tokens from "./Tokens";

interface WorkPlaceProps {
  employer: string;
  positions: {
    position: string;
    dateRange: string;
  }[];
  overview: string;
  bullets: string[];
}

const Employer = styled.div`
  color: ${Tokens.Colour.white};
  font-size: 20px;
  font-style: italic;
`;

const Position = styled.div`
  color: ${Tokens.Colour.white};
  font-style: italic;
  font-size: 12px;
`;

const Bullet = styled.li`
  color: ${Tokens.Colour.white};
  font-size: 12px;
`;

export const WorkPlace = ({
  employer,
  positions,
  overview,
  bullets,
}: WorkPlaceProps) => {
  return (
    <>
      <Employer>{employer}</Employer>

      {positions.map((position, i) => (
        <Position key={`${employer}_Positions_${i}`}>
          {position.position} :: {position.dateRange}
        </Position>
      ))}

      <Text>{overview}</Text>

      <ul>
        {bullets.map((bullet, i) => (
          <Bullet key={`${employer}_Bullets_${i}`}>{bullet}</Bullet>
        ))}
      </ul>
    </>
  );
};
