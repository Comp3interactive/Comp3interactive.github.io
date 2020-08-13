import React, { useState, useRef, useEffect } from "react";
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

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useOnClickOutside(ref, () => setIsOpen(false));

  function useOnClickOutside(
    ref: React.MutableRefObject<HTMLDivElement>,
    handler: { (): void; (arg0: any): void }
  ) {
    useEffect(() => {
      const listener = (event: { target: any }) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  return (
    <>
      <NavbarWrapper ref={ref}>
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
            <NavLink
              label={"Home"}
              href={"/#/"}
              onClick={() => {
                setIsOpen(false);
              }}
            />
            {/* <NavLink
              label={"Development Logs"}
              href={"/#/DevLogs"}
              onClick={() => {
                setIsOpen(false);
              }}
            /> */}
            <NavLink
              label={"Asset Collections"}
              href={"/#/Assets"}
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <NavLink
              label={"Support Us"}
              href={"/#/SupportUs"}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </InnerNavBar>
        ) : null}
      </NavbarWrapper>
    </>
  );
};
