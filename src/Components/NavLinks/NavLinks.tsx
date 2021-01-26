import React, { useState } from "react";
import { TextButton } from "../Button/Button";
import { useHistory } from "react-router-dom";
import * as Tokens from "../.Design/Tokens";
import styled from "@emotion/styled";

const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const NavLinks = () => {
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
        label={"Home"}
        onClick={() => onClick("/", "Home")}
        colour={activePage === "Home" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Projects"}
        onClick={() => onClick("/Projects", "Projects")}
        colour={activePage === "Projects" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Downloads"}
        onClick={() => onClick("/Downloads", "Downloads")}
        colour={activePage === "Downloads" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Events"}
        onClick={() => onClick("/Events", "Events")}
        colour={activePage === "Events" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Support"}
        onClick={() => onClick("/Support", "Support")}
        colour={activePage === "Support" ? Tokens.Colour.accent01 : undefined}
      />
    </NavLinkWrapper>
  );
};
