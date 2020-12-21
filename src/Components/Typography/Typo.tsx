import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const H1 = styled.h1`
  font-size: ${Tokens.Font.sizes.large};
  color: ${Tokens.Colour.white};
  text-align: center;
  font-weight: bold;
`;

export const LinkCardHeader = styled.div`
  font-size: ${Tokens.Font.sizes.small};
  color: ${Tokens.Colour.white};
  font-weight: bold;
`;

export const H2 = styled.div`
  font-size: ${Tokens.Font.sizes.medium};
  color: ${Tokens.Colour.accent};
  font-weight: bold;
  text-align: center;
  margin: 10px;
`;

export const P = styled.div`
  padding: 10px;
  font-size: ${Tokens.Font.sizes.small};
  font-weight: 300;
  color: ${Tokens.Colour.offWhite};
`;

export const Sub = styled.div`
  font-size: ${Tokens.Font.sizes.tiny};
  font-weight: 300;
  color: ${Tokens.Colour.offWhite};
`;
