import styled from "@emotion/styled";
import * as Tokens from "./Tokens";

export const Header = styled.div`
  font-size: 48px;
  color: ${Tokens.Colour.white};
  font-weight: 1000;
`;

export const Text = styled.p`
  color: ${Tokens.Colour.midGrey};
`;

export const SectionHeader = styled.p`
  color: ${Tokens.Colour.white};
  font-size: 20px;
`;

export const InfoLabel = styled.p`
  font-size: 20px;
  font-style: italic;
  color: ${Tokens.Colour.seafoamGreen};
`;

export const Email = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-style: bold;
  color: ${Tokens.Colour.seafoamGreen};
`;
