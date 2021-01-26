import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px;
  border: 0.125rem solid transparent;
  border-radius: 5px;
  background-color: ${Tokens.Colour.accent01};
  color: ${Tokens.Colour.offWhite};
  width: ${(props) => (props.width ? props.width : "100%")};
  text-decoration: none;
  font-size: ${Tokens.FontSize.small};
  font-weight: ${Tokens.FontWeight.light};
  transition: all 0.2s;
  text-align: center;
  ${(props) =>
    !props.width
      ? "display: flex; justify-content: center; align-items: center;"
      : null}
  &:hover {
    border: 0.125rem solid ${Tokens.Colour.accent01};
    cursor: pointer;
    background-color: ${Tokens.Colour.offWhite};
    color: ${Tokens.Colour.accent01};
    font-weight: ${Tokens.FontWeight.semiBold};
  }
  &:focus,
  &:focus {
    outline: none;
  }
`;

export const StyledTextButton = styled.button<TextButtonProps>`
  padding: 10px;
  border: none;
  color: ${(props) => (props.colour ? props.colour : Tokens.Colour.offWhite)};
  background-color: transparent;
  width: auto;
  text-decoration: none;
  font-size: ${Tokens.FontSize.small};
  font-weight: ${Tokens.FontWeight.semiBold};
  transition: all 0.2s;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${Tokens.Colour.accent01};
  }
  &:focus,
  &:focus {
    outline: none;
  }
`;
export interface ButtonProps {
  href: string;
  label?: string;
  width?: string;
  icon?: IconDefinition;
  isInternalLink?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface TextButtonProps {
  label: string;
  icon?: IconDefinition;
  colour?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

const externalLinkCick = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const Button: React.FC<ButtonProps> = ({
  href,
  label,
  width,
  icon,
  isInternalLink,
  onClick,
  ariaLabel,
}) => {
  return (
    <StyledButton
      href={href}
      label={label}
      icon={icon}
      width={width}
      onClick={isInternalLink ? onClick : () => externalLinkCick(href)}
      ariaLabel={ariaLabel}
      aria-label={ariaLabel}
    >
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} /> {label ? <>&nbsp; {label}</> : null}
        </>
      ) : (
        label
      )}
    </StyledButton>
  );
};

export const TextButton: React.FC<TextButtonProps> = ({
  label,
  icon,
  colour,
  ariaLabel,
  onClick,
}) => {
  return (
    <StyledTextButton
      label={label}
      icon={icon}
      onClick={onClick}
      colour={colour}
      aria-label={ariaLabel}
      ariaLabel={ariaLabel}
    >
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} /> {label ? <>&nbsp; {label}</> : null}
        </>
      ) : (
        label
      )}
    </StyledTextButton>
  );
};
