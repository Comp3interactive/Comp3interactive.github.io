import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import { LinkButtonProps } from "./Button";

export const StyledLinkButton = styled.button<LinkButtonProps>`
  padding: 10px 20px 10px 20px;
  display: inline-block;
  border: 0.125rem solid transparent;
  border-radius: 2rem;
  background-color: ${Tokens.Colour.seafoamGreen};
  color: ${Tokens.Colour.darkestGrey};
  width: ${(props) => (props.width ? props.width : "auto")};
  text-decoration: none;
  font-size: ${Tokens.Font.sizes.small};
  font-weight: bold;
  transition: all 0.2s;
  text-align: center;
  ${(props) =>
    !props.width
      ? "display: flex; justify-content: center; align-items: center;"
      : null}
  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${Tokens.Colour.seafoamGreen};
    border: 0.125rem solid ${Tokens.Colour.seafoamGreen};
    text-decoration: none;
  }
`;
