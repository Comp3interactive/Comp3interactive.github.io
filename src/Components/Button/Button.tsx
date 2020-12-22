import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StyledButton, StyledNavButton } from "./ButtonStyling";
import { NavLabel } from "../Typography/Typography";

export interface ButtonProps {
  href: string;
  label?: string;
  width?: string;
  icon?: IconDefinition;
  isExternalLink?: boolean;
  onClick?: () => void;
}

export interface NavButtonProps {
  href?: string;
  label?: string;
  icon: IconDefinition;
  isExternalLink?: boolean;
  isSelected: boolean;
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
  isExternalLink,
  onClick,
}) => {
  return (
    <StyledButton
      href={href}
      label={label}
      icon={icon}
      width={width}
      onClick={isExternalLink ? () => externalLinkCick(href) : onClick}
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

export const NavButton: React.FC<NavButtonProps> = ({
  href,
  label,
  icon,
  isExternalLink,
  isSelected,
  onClick,
}) => {
  return (
    <StyledNavButton
      href={href}
      icon={icon}
      isSelected={isSelected}
      onClick={
        isExternalLink ? () => externalLinkCick(href ? href : "") : onClick
      }
    >
      <FontAwesomeIcon icon={icon} />
      <NavLabel>{label}</NavLabel>
    </StyledNavButton>
  );
};
