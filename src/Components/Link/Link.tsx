import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export interface LinkProps {
  label: string;
  href: string;
}

const LinkContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  font-size: ${Tokens.Font.sizes.medium};
  margin-bottom: 10px;
  color: ${Tokens.Colour.green};
  margin-top: 20px;
  text-decoration: none;
`;

export const Link = ({ label, href }: LinkProps) => {
  return (
    <LinkContainer>
      <StyledLink href={href}>{label}</StyledLink>
    </LinkContainer>
  );
};