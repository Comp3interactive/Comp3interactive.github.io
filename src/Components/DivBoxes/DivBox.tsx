import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";
import React from "react";

export interface DivBoxProps {
  color: string;
  showTop?: boolean;
  showBottom?: boolean;
}

export interface GradientProps {
  color1: string;
  color2: string;
  angle?: number;
}

export const AngledDiv = styled.div<GradientProps>`
  background-image: -webkit-linear-gradient(
    ${(props) => (props.angle ? props.angle + "deg" : "30deg")},
    ${(props) => props.color1} 50%,
    ${(props) => props.color2} 50%
  );
`;

export const HeaderDiv = styled.div`
  background-image: -webkit-linear-gradient(
    95deg,
    transparent 50%,
    ${Tokens.Colour.black} 50%
  );
`;

const ThickRightTop = styled.div<DivBoxProps>`
  height: 100px;
  background-image: -webkit-linear-gradient(
    93deg,
    ${(props) => props.color} 50%,
    transparent 50%
  );
`;

const ThickRightBottom = styled.div<DivBoxProps>`
  height: 100px;
  background-image: -webkit-linear-gradient(
    87deg,
    transparent 50%,
    ${(props) => props.color} 50%
  );
`;

const ThickLeftTop = styled.div<DivBoxProps>`
  height: 100px;
  background-image: -webkit-linear-gradient(
    87deg,
    ${(props) => props.color} 50%,
    transparent 50%
  );
`;

const ThickLeftBottom = styled.div<DivBoxProps>`
  height: 100px;
  background-image: -webkit-linear-gradient(
    93deg,
    transparent 50%,
    ${(props) => props.color} 50%
  );
`;

export const RowHighlight = styled.div<DivBoxProps>`
  background-color: ${(props) => props.color};
`;

export const RightSideThick: React.FC<DivBoxProps> = ({
  color,
  children,
  showBottom,
  showTop,
}) => {
  return (
    <>
      {showTop || showTop === undefined ? (
        <ThickRightTop color={color} />
      ) : null}
      <RowHighlight color={color}>{children}</RowHighlight>
      {showBottom || showBottom === undefined ? (
        <ThickRightBottom color={color} />
      ) : null}
    </>
  );
};

export const LeftSideThick: React.FC<DivBoxProps> = ({
  color,
  children,
  showBottom = true,
  showTop = true,
}) => {
  return (
    <>
      {showTop || showTop === undefined ? <ThickLeftTop color={color} /> : null}
      <RowHighlight color={color}>{children}</RowHighlight>
      {showBottom || showBottom === undefined ? (
        <ThickLeftBottom color={color} />
      ) : null}
    </>
  );
};
