import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const StyledTag = styled.span`
  color: ${Tokens.Colour.accent02};
  font-weight: ${Tokens.FontWeight.semiBold};
  font-size: ${Tokens.FontSize.small};
`;

export const Styledlink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: ${Tokens.FontWeight.medium};
  color: ${Tokens.Colour.offWhite};
`;
