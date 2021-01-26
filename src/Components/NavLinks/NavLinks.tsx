import React, { useState } from "react";
import { TextButton } from "../Button/Button";
import { useHistory } from "react-router-dom";
import * as Tokens from "../.Design/Tokens";
import styled from "@emotion/styled";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

interface NavLinkProps {
  width: number;
}

export const NavLinks = ({ width }: NavLinkProps) => {
  const history = useHistory();

  const [activePage, setActivePage] = useState("Home");

  const onClick = (url: string, pageName: string) => {
    if (window.location.hash === `#${url}`) return;

    setActivePage(pageName);
    history.push(url);
  };

  return (
    <NavLinkWrapper>
      <TextButton
        label={width >= 600 ? "Home" : ""}
        icon={Icons.faHome}
        onClick={() => onClick("/", "Home")}
        colour={activePage === "Home" ? Tokens.Colour.accent01 : undefined}
        aria-label={"Home page"}
      />

      <TextButton
        label={width >= 600 ? "Projects" : ""}
        icon={Icons.faLaptopCode}
        onClick={() => onClick("/Projects", "Projects")}
        colour={activePage === "Projects" ? Tokens.Colour.accent01 : undefined}
        aria-label={"Projects page"}
      />

      <TextButton
        label={width >= 600 ? "Downloads" : ""}
        icon={Icons.faDownload}
        onClick={() => onClick("/Downloads", "Downloads")}
        colour={activePage === "Downloads" ? Tokens.Colour.accent01 : undefined}
        aria-label={"Downloads page"}
      />

      <TextButton
        label={width >= 600 ? "Events" : ""}
        icon={Icons.faCalendarAlt}
        onClick={() => onClick("/Events", "Events")}
        colour={activePage === "Events" ? Tokens.Colour.accent01 : undefined}
        aria-label={"Events page"}
      />

      <TextButton
        label={width >= 600 ? "Support" : ""}
        icon={Icons.faHeartbeat}
        onClick={() => onClick("/Support", "Support")}
        colour={activePage === "Support" ? Tokens.Colour.accent01 : undefined}
        aria-label={"Support page"}
      />
    </NavLinkWrapper>
  );
};
