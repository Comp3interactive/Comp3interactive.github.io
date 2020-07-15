import React from "react";
import styled from "@emotion/styled";
import { ConstructionText } from "../Components/Typography/Typography";
import { keyframes } from "@emotion/core";
import { Link } from "../Components/Link/Link";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 20%;

  animation: ${bounce} 2s infinite linear;
`;

export const UnderConstruction = () => {
  return (
    <>
      <ConstructionText>THIS PAGE IS UNDER CONSTRUCTION</ConstructionText>
      <StyledImage src="./Images/Bottlecaps/comp3.png" alt="comp3 logo" />
      <ConstructionText>You can still find us here:</ConstructionText>
      <Link label="YouTube" href="https://www.youtube.com/comp3interactive" />
      <Link label="Facebook" href="https://www.facebook.com/comp3interactive" />
      <Link
        label="Instagram"
        href="https://www.instagram.com/comp3interactive"
      />
      <Link label="Twitter" href="https://www.twitter.com/comp3int" />
      <Link label="Patreon" href="https://www.patreon.com/comp3interactive" />
      <Link label="GitHub" href="https://www.github.com/comp3interactive" />
      <Link label="Itch.io" href="https://comp3interactive.itch.io" />
    </>
  );
};
