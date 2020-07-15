import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export interface LinkProps {
  label: string;
  href: string;
}

const StyledLink = styled.a`
  font-size: ${Tokens.Font.sizes.small};
  text-align: center;
  margin-bottom: 10px;
  color: ${Tokens.Colour.green};
  margin-top: 20px;
  text-decoration: none;
`;

export const Link = ({ label, href }: LinkProps) => {
  return <StyledLink href={href}>{label}</StyledLink>;
};
