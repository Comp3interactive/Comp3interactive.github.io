import React from "react";
import styled from "@emotion/styled";
import {
  PageHeader,
  Button,
  P,
  Card,
  CardDeck,
  Colour,
} from "../../Components";
import { Links } from "../../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  font-size: 100px;
  color: ${Colour.offWhite};
  text-align: center;
`;

export const Downloads = () => {
  return (
    <>
      <PageHeader>Downloads</PageHeader>
      <Card>
        <P>
          We offer a selection of free and premium assets for use in your own
          games! These range from code snippets and utility functions which can
          be downloaded via out GitHub Page to a mixture of 2D and 3D game
          assets, pixel art sprites, UI assets and models available from out
          Itch.io page! Check out the links below!
        </P>
      </Card>

      <CardDeck header={"Download Links"}>
        <Card>
          <IconWrapper>
            <FontAwesomeIcon icon={Brands.faItchIo} />
          </IconWrapper>
          <P>
            A mixture of free and premium game assets ready to download and
            import into your projects!
          </P>
          <Button
            href={Links.itch}
            icon={Brands.faItchIo}
            label={"Itch.io"}
            width={"95%"}
            isExternalLink={true}
          />
        </Card>
        <Card>
          <IconWrapper>
            <FontAwesomeIcon icon={Brands.faGithub} />
          </IconWrapper>
          <P>
            A mixture of free and premium game assets ready to download and
            import into your projects!
          </P>
          <Button
            href={Links.github}
            icon={Brands.faGithub}
            label={"GitHub"}
            width={"95%"}
            isExternalLink={true}
          />
        </Card>
      </CardDeck>
    </>
  );
};
