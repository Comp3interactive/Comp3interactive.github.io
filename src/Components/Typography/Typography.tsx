import React from "react";
import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

const ConstructionTextStyle = styled.div`
  font-size: ${Tokens.Font.sizes.giant};
  text-align: center;
  margin-bottom: 10px;
  color: white;
  margin-top: 20px;

  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText = styled.p`
  font-size: ${Tokens.Font.sizes.medium};
  color: ${Tokens.Colour.white};
`;

export const ConstructionText: React.FC = (props) => {
  return <ConstructionTextStyle>{props.children}</ConstructionTextStyle>;
};

export const Text: React.FC = (props) => {
  return <StyledText>{props.children}</StyledText>;
};
