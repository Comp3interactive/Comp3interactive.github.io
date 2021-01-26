import React from "react";
import { TextButton } from "../Button/Button";
import { useHistory } from "react-router-dom";
import * as Tokens from "../.Design/Tokens";
import styled from "@emotion/styled";

interface NavLinkProps {
  activePage: string;
}

const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const NavLinks = ({ activePage }: NavLinkProps) => {
  const history = useHistory();

  const onClick = (url: string) => {
    history.push(url);
  };

  return (
    <NavLinkWrapper>
      <TextButton
        label={"Home"}
        onClick={() => onClick("/")}
        colour={activePage === "Home" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Projects"}
        onClick={() => onClick("/Projects")}
        colour={activePage === "Projects" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Downloads"}
        onClick={() => onClick("/Downloads")}
        colour={activePage === "Downloads" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Events"}
        onClick={() => onClick("/Events")}
        colour={activePage === "Events" ? Tokens.Colour.accent01 : undefined}
      />

      <TextButton
        label={"Support"}
        onClick={() => onClick("/Support")}
        colour={activePage === "Support" ? Tokens.Colour.accent01 : undefined}
      />
    </NavLinkWrapper>
  );
};
