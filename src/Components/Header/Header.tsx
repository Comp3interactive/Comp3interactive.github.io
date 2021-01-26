import React from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  width: number;
}

const StyledHeader = styled.img<{ width: number }>`
  width: 100%;
  border-radius: ${(props) => (props.width >= 600 ? "10px" : "0px")};
`;

export const Header = ({ width }: HeaderProps) => {
  return (
    <StyledHeader
      width={width}
      src={
        width >= 600
          ? "Images/Branding/Header.png"
          : "Images/Branding/MobileHeader.png"
      }
    />
  );
};
