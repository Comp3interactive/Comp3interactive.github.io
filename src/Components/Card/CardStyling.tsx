import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { CardProps } from "./Card";

export const StyledCard = styled.div<CardProps>`
  ${(props) =>
    props.wrapContent &&
    `
      @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
      }

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;`}

  border: 2px solid ${Tokens.Colour.midGrey};
  background-color: ${Tokens.Colour.midDarkGrey};
  border-radius: 15px;
  padding: 10px;
  margin: 10px;

  width: ${(props) => (props.width ? props.width : null)};
`;

export const StyledCardDeck = styled.div`
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
