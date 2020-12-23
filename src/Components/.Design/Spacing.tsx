import styled from "@emotion/styled";

export interface SpaceProps {
  height: number;
}

export const Space = styled.div<SpaceProps>`
  margin-top: ${(props) => props.height / 2}px;
  margin-bottom: ${(props) => props.height / 2}px;
`;
