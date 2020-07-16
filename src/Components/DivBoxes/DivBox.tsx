import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const LightToDarkGreyDiv = styled.div`
  background-image: -webkit-linear-gradient(
    30deg,
    ${Tokens.Colour.mediumGrey} 50%,
    ${Tokens.Colour.darkGrey} 50%
  );
`;

export const DarkToLightGreyDiv = styled.div`
  background-image: -webkit-linear-gradient(
    150deg,
    ${Tokens.Colour.darkGrey} 50%,
    ${Tokens.Colour.mediumGrey} 50%
  );
`;

export const DarkGreyToGreenDiv = styled.div`
  background-image: -webkit-linear-gradient(
    150deg,
    ${Tokens.Colour.darkGrey} 50%,
    ${Tokens.Colour.green} 50%
  );
`;

export const GreenToDarkGreen = styled.div`
  background-image: -webkit-linear-gradient(
    150deg,
    ${Tokens.Colour.darkGrey} 50%,
    ${Tokens.Colour.black} 50%
  );
`;

export const HeaderDiv = styled.div`
  background-image: -webkit-linear-gradient(
    95deg,
    transparent 50%,
    ${Tokens.Colour.black} 50%
  );
`;
