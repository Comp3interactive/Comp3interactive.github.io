import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Header = () => {
  return <StyledHeader src={"Images/Branding/Header.png"} />;
};
