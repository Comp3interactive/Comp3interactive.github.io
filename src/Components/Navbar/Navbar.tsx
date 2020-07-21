import React, { useState } from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import * as Typo from "../Typography/Typography";
import { Button } from "../Button/Button";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "../Navbar/NavLink";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: ${Tokens.Colour.black};
  color: ${Tokens.Colour.white};
  height: 75px;
  z-index: 9999;

  border-bottom: 1px solid ${Tokens.Colour.darkGreen};
`;

const InnerNavBar = styled.div`
  @media only screen and (min-width: 600px) {
    width: 30%;
  }

  position: fixed;
  top: 0;
  width: 100%;
  right: 0px;
  background-color: ${Tokens.Colour.mediumGrey};
  z-index: 1;
  margin-top: 76px;

  border-bottom: 1px solid ${Tokens.Colour.darkGreen};
  -webkit-box-shadow: 0px 29px 28px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 29px 28px 7px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 29px 28px 7px rgba(0, 0, 0, 0.5);
`;

const Brand = styled.div`
  @media only screen and (max-width: 600px) {
    padding-left: 15px;
  }

  padding-left: 50px;
`;

const Toggle = styled.div`
  @media only screen and (max-width: 600px) {
    padding-right: 10px;
  }

  padding-right: 50px;
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <Brand>
          <Typo.Navbar>Comp-3 Interactive</Typo.Navbar>
        </Brand>
        <Toggle>
          <Button
            icon={isOpen ? Icons.faArrowUp : Icons.faBars}
            onClick={() => setIsOpen(!isOpen)}
          />
        </Toggle>
        {isOpen ? (
          <InnerNavBar>
            <NavLink label={"Home"} href={process.env.PUBLIC_URL + "/"} />
            <NavLink
              label={"Development Logs"}
              href={process.env.PUBLIC_URL + "/DevLogs"}
            />
            <NavLink label={"Asset Collections"} />
            <NavLink
              label={"Support Us"}
              href={process.env.PUBLIC_URL + "/SupportUs"}
            />
            <NavLink label={"Contact"} />
          </InnerNavBar>
        ) : null}
      </NavbarWrapper>
    </>
  );
};
