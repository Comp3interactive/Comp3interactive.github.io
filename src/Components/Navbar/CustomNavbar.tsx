import React, { useState } from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { StyledText } from "../Typography/Typography";
import Sidebar from "react-sidebar";

const sidebar = {
  zIndex: 2,
  position: "absolute",
  top: 0,
  bottom: 0,
  transition: "transform .3s ease-out",
  WebkitTransition: "-webkit-transform .3s ease-out",
  willChange: "transform",
  overflowY: "auto",
};

const StyledSidebar = styled(Sidebar)`
  background-color: red;
`;

export const CustomNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <StyledSidebar
      sidebar={<b>Sidebar content</b>}
      onSetOpen={() => {
        setSidebarOpen(!sidebarOpen);
      }}
      open={sidebarOpen}
      styles={{
        root: {},
        sidebar: {
          backgroundColor: Tokens.Colour.black,
          width: "90%",
          color: Tokens.Colour.white,
        },
        content: {},
        overlay: {},
        dragHandle: {},
      }}
    >
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>Open sidebar</button>
    </StyledSidebar>
  );
};
