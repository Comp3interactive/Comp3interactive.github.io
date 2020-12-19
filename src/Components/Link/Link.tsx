import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export interface LinkProps {
  label: string;
  href: string;
  color?: string;
}

const StyledLink = styled.a<LinkProps>`
  font-size: ${Tokens.Font.sizes.small};
  color: ${(props) => (props.color ? props.color : Tokens.Colour.offWhite)};
  text-decoration: none;
`;

export const Link = ({ label, href, color }: LinkProps) => {
  return (
    <div>
      <StyledLink color={color} href={href} label={label}>
        {label}
      </StyledLink>
    </div>
  );
};
