import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { ButtonProps, NavButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  margin: 10px;
  padding: 10px 20px 10px 20px;
  display: inline-block;
  border: 0.125rem solid ${Tokens.Colour.offWhite};
  border-radius: 2rem;
  background-color: transparent;
  color: ${Tokens.Colour.offWhite};
  width: ${(props) => (props.width ? props.width : "auto")};
  text-decoration: none;
  font-size: ${Tokens.FontSize.small};
  font-weight: bold;
  transition: all 0.2s;
  text-align: center;
  ${(props) =>
    !props.width
      ? "display: flex; justify-content: center; align-items: center;"
      : null}
  &:hover {
    cursor: pointer;
    background-color: ${Tokens.Colour.offWhite};
    color: ${Tokens.Colour.midGrey};
    border: 0.125rem solid transparent;
    text-decoration: none;
  }
  &:focus,
  &:focus {
    outline: none;
  }
`;

export const StyledNavButton = styled.button<NavButtonProps>`
  @media only screen and (max-width: 1000px) {
    font-size: ${(props) =>
      props.iconSize ? props.iconSize : Tokens.FontSize.medium};
  }

  display: inline-block;
  background-color: transparent;
  color: ${(props) =>
    props.isSelected ? Tokens.Colour.accent01 : Tokens.Colour.offWhite};
  width: auto;
  text-decoration: none;
  font-size: ${(props) =>
    props.iconSize ? props.iconSize : Tokens.FontSize.large};
  transition: all 0.2s;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
    color: ${Tokens.Colour.accent01};
  }
  &:focus,
  &:focus {
    outline: none;
  }
`;
