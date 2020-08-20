import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export interface ButtonProps {
  href?: string;
  label?: string;
  width?: string;
  full?: boolean;
  icon?: IconDefinition;
  onClick?: () => void;
}

export interface DownloadButtonProps {
  href: string;
  color: string;
  textColor: string;
}

const StyledPrimaryButton = styled.button<ButtonProps>`
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

const StyledDownloadButton = styled.button<DownloadButtonProps>`
  padding: 10px 20px 10px 20px;
  display: inline-block;
  border: 0.125rem solid ${(props) => props.color};
  border-radius: 5rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  width: auto;
  text-decoration: none;
  font-size: ${Tokens.Font.sizes.small};
  transition: all 0.2s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.color};
    text-decoration: none;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  href,
  label,
  width,
  full,
  icon,
  onClick,
}) => {
  const StyledButtonOut = StyledPrimaryButton.withComponent("a");
  return (
    <StyledButtonOut
      href={href}
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
    </StyledButtonOut>
  );
};

export const DownloadGameButton: React.FC<DownloadButtonProps> = ({
  href,
  color,
  textColor,
}) => {
  const StyledButtonOut = StyledDownloadButton.withComponent("a");
  return (
    <StyledButtonOut href={href} color={color} textColor={textColor}>
      <FontAwesomeIcon icon={faGooglePlay} />{" "}
      <>
        &nbsp; <strong>DOWNLOAD NOW</strong>
      </>
    </StyledButtonOut>
  );
};
