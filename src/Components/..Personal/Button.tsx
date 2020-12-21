import styled from "@emotion/styled";
import * as Tokens from "./Tokens";

export const SidebarButton = styled.button<{ isSelected: boolean }>`
  border: none;
  background-color: transparent;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  color: ${(props) =>
    props.isSelected ? Tokens.Colour.seafoamGreen : Tokens.Colour.white};
  font-size: 50px;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: #6db288;
  }
`;
