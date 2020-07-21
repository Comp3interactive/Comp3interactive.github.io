import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export interface NavLinkProps {
  href?: string;
  label?: string;
  onClick?: () => void;
}

const StyledNavLink = styled.button<NavLinkProps>`
  display: inline-block;
  border-bottom: 1px solid ${Tokens.Colour.darkGrey};
  background-color: ${Tokens.Colour.mediumGrey};
  color: ${Tokens.Colour.white};
  height: 3rem;
  width: 100%;
  text-decoration: none;
  font-size: ${Tokens.Font.sizes.small};
  line-height: 3rem;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${Tokens.Colour.green};
    text-decoration: none;
  }
`;

export const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  const StyledButtonOut = StyledNavLink.withComponent("a");
  return (
    <StyledButtonOut href={href} label={label} onClick={onClick}>
      {label}
    </StyledButtonOut>
  );
};
