import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  background-color: ${Tokens.Colour.midGrey};
  text-align: center;

  z-index: 2;

  -webkit-box-shadow: 0px -10px 69px 29px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -10px 69px 29px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -10px 69px 29px rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  display: inline-block;
  border: none;
  background: none;
  color: ${Tokens.Colour.offWhite};
  text-decoration: none;
  font-size: ${Tokens.Font.sizes.tiny};
  font-weight: bold;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${Tokens.Colour.offWhite};
`;
