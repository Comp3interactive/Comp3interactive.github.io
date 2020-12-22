import styled from "@emotion/styled";
import img from "../../Images/BG_Shapes.png";

interface GradientProps {
  color01: string;
  color02: string;
}

export const BackgroundShapes = styled.div<GradientProps>`
  background-image: url(${img}),
    linear-gradient(${(props) => props.color01}, ${(props) => props.color02});
  position: fixed;
  width: auto;
  height: auto;
  top: -28px;
  left: -28px;
  right: -28px;
  bottom: -28px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;
