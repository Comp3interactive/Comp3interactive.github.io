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

  padding: 10px;

  background-color: black;
  text-align: center;
  color: ${Tokens.Colour.offWhite};

  z-index: 2;
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
