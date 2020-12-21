import styled from "@emotion/styled";
import * as Tokens from "./Tokens";

export interface ContainerProps {
  width: string;
  height: string;
  verticalOffset?: string;
}

export const SidebarContainer = styled.div<ContainerProps>`
  background-color: ${Tokens.Colour.darkestGrey};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.verticalOffset};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div<ContainerProps>`
  background-color: ${Tokens.Colour.darkestGrey};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.verticalOffset};
  position: relative;
  z-index: 1;

  -webkit-box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.75);
`;

export const ContentContainer = styled.div<ContainerProps>`
  background-color: ${Tokens.Colour.darkestGrey};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.verticalOffset};
  display: flex;
  flex-direction: row;
`;
