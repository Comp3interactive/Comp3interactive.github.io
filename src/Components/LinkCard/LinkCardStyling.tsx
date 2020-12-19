import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const StyledLinkCard = styled.div`
  padding: 10px;
  background-image: linear-gradient(to right, #464757, #373742);
  margin: 5px;
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  -webkit-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 21px -8px rgba(0, 0, 0, 0.3);

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const IconHolder = styled.div`
  margin: 0px 10px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${Tokens.Colour.darkestGrey};
  text-align: center;
`;

export const StyledIcon = styled.div`
  color: ${Tokens.Colour.offWhite};
  font-size: 30px;
  padding: 9px 0;
  text-align: center;
`;

export const BodyHolder = styled.div``;
