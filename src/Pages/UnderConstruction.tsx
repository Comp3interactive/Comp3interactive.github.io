import React from "react";
import styled from "@emotion/styled";
import { ConstructionTextStyle } from "../Components/Typography/Typography";
import { keyframes } from "@emotion/core";
import { Link } from "../Components/Link/Link";
import { Links } from "../Utils/ExternalLinks";

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
      <ConstructionTextStyle>
        THIS PAGE IS UNDER CONSTRUCTION
      </ConstructionTextStyle>
      <StyledImage src="./Images/Bottlecaps/comp3.png" alt="comp3 logo" />
      <ConstructionTextStyle>You can still find us here:</ConstructionTextStyle>
      <Link label="YouTube" href={Links.youtube} />
      <Link label="Facebook" href={Links.facebook} />
      <Link label="Instagram" href={Links.instagram} />
      <Link label="Discord" href={Links.discord} />
      <Link label="Twitter" href={Links.twitter} />
      <Link label="Patreon" href={Links.patreon} />
      <Link label="GitHub" href={Links.github} />
      <Link label="Itch.io" href={Links.itch} />
      <Link label="Google Play" href={Links.googleplay} />
    </>
  );
};
