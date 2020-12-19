import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StyledLinkButton } from "./ButtonStyling";

export interface LinkButtonProps {
  href: string;
  label?: string;
  width?: string;
  icon?: IconDefinition;
}

const handleClick = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const Button: React.FC<LinkButtonProps> = ({
  href,
  label,
  width,
  icon,
}) => {
  return (
    <StyledLinkButton
      href={href}
      label={label}
      icon={icon}
      width={width}
      onClick={() => handleClick(href)}
    >
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} /> {label ? <>&nbsp; {label}</> : null}
        </>
      ) : (
        label
      )}
    </StyledLinkButton>
  );
};
