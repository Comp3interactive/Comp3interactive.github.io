import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export interface ButtonProps {
  to: string;
  label?: string;
  width?: string;
  full?: boolean;
  icon?: IconDefinition;
  onClick?: () => void;
}

const StyledPrimaryButton = styled(Link)<ButtonProps>`
  padding: 10px 20px 10px 20px;
  display: inline-block;
  border: 0.125rem solid ${Tokens.Colour.green};
  border-radius: 2rem;
  background-color: ${Tokens.Colour.green};
  color: ${Tokens.Colour.white};
  width: ${(props) => (props.width ? props.width : "auto")};
  text-decoration: none;
  font-size: ${Tokens.Font.sizes.small};
  transition: all 0.2s;
  text-align: center;
  ${(props) =>
    props.full
      ? "display: flex; justify-content: center; align-items: center;"
      : null}
  &:hover {
    background-color: transparent;
    color: ${Tokens.Colour.green};
    text-decoration: none;
  }
`;

export const LinkButton: React.FC<ButtonProps> = ({
  to,
  label,
  width,
  full,
  icon,
  onClick,
}) => {
  return (
    <StyledPrimaryButton
      to={to}
      label={label}
      icon={icon}
      full={full}
      width={width}
      onClick={onClick}
    >
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} /> {label ? <>&nbsp; {label}</> : null}
        </>
      ) : (
        label
      )}
    </StyledPrimaryButton>
  );
};
