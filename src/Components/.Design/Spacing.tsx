import styled from "@emotion/styled";

export interface SpaceProps {
  height: number;
}

export const Space = styled.div<SpaceProps>`
  padding-top: ${(props) => props.height / 2}px;
  padding-bottom: ${(props) => props.height / 2}px;
`;
