import React from "react";
import {
  StyledLinkCard,
  IconHolder,
  BodyHolder,
  StyledIcon,
} from "./LinkCardStyling";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkCardHeader, Sub } from "../Typography/Typo";

export interface LinkCardProps {
  header: string;
  body?: string;
  icon: IconDefinition;
  href: string;
}

const handleClick = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const LinkCard = ({ header, body, icon, href }: LinkCardProps) => {
  return (
    <StyledLinkCard onClick={() => handleClick(href)}>
      <IconHolder>
        <StyledIcon>
          <FontAwesomeIcon icon={icon} />
        </StyledIcon>
      </IconHolder>
      <BodyHolder>
        <LinkCardHeader>{header}</LinkCardHeader>
        <Sub>{body}</Sub>
      </BodyHolder>
    </StyledLinkCard>
  );
};
