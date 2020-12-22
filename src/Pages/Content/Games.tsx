import React from "react";
import styled from "@emotion/styled";
import {
  PageHeader,
  Button,
  P,
  Card,
  CardDeck,
  SubHeader,
} from "../../Components";
import { Links } from "../../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

interface ButtonColour {
  colour: string;
}

const IconWrapper = styled.div<ButtonColour>`
  font-size: 100px;
  color: ${(props) => props.colour};
  text-align: center;
`;

export const Games = () => {
  return (
    <>
      <PageHeader>Our Games</PageHeader>
      <Card>
        <P>
          We do make games occasionally too! Mostly mobile games, specifically
          Android. If you'd like to play any then check out the links below!
        </P>
      </Card>

      <CardDeck header={"Google Play Links"}>
        <Card>
          <IconWrapper colour={"#9231da"}>
            <FontAwesomeIcon icon={Icons.faArrowCircleDown} />
          </IconWrapper>
          <SubHeader>Word Drop</SubHeader>
          <P>
            Find as many words from the array of tiles as you can within the
            time limit!
          </P>
          <Button
            href={Links.wordDrop}
            icon={Brands.faGooglePlay}
            label={"Word Drop"}
            width={"95%"}
            isExternalLink={true}
          />
        </Card>
        <Card>
          <IconWrapper colour={"#a8d65b"}>
            <FontAwesomeIcon icon={Icons.faPastafarianism} />
          </IconWrapper>
          <SubHeader>Invaders From Outerspace</SubHeader>
          <P>
            A clone of Space Invaders originally made for the tutorial series on
            my YouTube channel!
          </P>
          <Button
            href={Links.invadersGame}
            icon={Brands.faGooglePlay}
            label={"Invaders from Outerspace"}
            width={"95%"}
            isExternalLink={true}
          />
        </Card>
        <Card>
          <IconWrapper colour={"#ea5234"}>
            <FontAwesomeIcon icon={Icons.faKhanda} />
          </IconWrapper>
          <SubHeader>Ascension</SubHeader>
          <P>
            Jump and attack, simple to play but hard to master! How high can you
            climb?
          </P>
          <Button
            href={Links.ascension}
            icon={Brands.faGooglePlay}
            label={"Ascension"}
            width={"95%"}
            isExternalLink={true}
          />
        </Card>
      </CardDeck>
    </>
  );
};
