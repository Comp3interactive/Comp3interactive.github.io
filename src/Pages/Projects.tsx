import React from "react";
import styled from "@emotion/styled";
import { Card, Button } from "../Components";
import * as Tokens from "../Components/.Design/Tokens";
import * as Typo from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../Utils/ExternalLinks";

const IconWrapper = styled.span`
  color: ${Tokens.Colour.accent01};
`;

const StyledImage = styled.img<{ width?: string }>`
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : "50%")};

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Projects = (width: number) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Grid container>
      <h1 aria-label={"Projects"} />
      <Grid container>
        <Grid item md={8} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Icons.faLaptopCode} />
              </IconWrapper>{" "}
              Current Projects
            </Typo.SectionHeader>
            <Typo.SectionHeader>The Thirteenth Floor</Typo.SectionHeader>
            <Typo.P>
              The Thirteenth Floor is a PS1 inspired, first person, horror
              experience! You awaken on the thirteenth floor of a hotel to
              strange noises, once you leave your room you must uncover the
              mystery of what's happening in this hotel.
            </Typo.P>
            <Typo.P>
              Smooth controls, puzzels, old school look and feel. What more
              could you want??
            </Typo.P>

            <StyledImage
              src={"Images/Projects/ThirteenthFloor.png"}
              width={"100%"}
              onClick={() => openLink(Links.thirteenthFloor)}
              alt={"The Thirteenth Floor Logo"}
            />
            <Button
              href={Links.thirteenthFloor}
              label="Follow Progress Here"
              icon={Brands.faItchIo}
            />
            <br />
          </Card>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Icons.faTasks} />
              </IconWrapper>{" "}
              Previous Projects
            </Typo.SectionHeader>

            <Typo.SectionHeader>Word Drop</Typo.SectionHeader>
            <Typo.P>
              A fast paced work searching game, you have 2 minutes to find as
              many words from the randomised set as you can!
            </Typo.P>
            <StyledImage
              src={"Images/Projects/WordDrop.png"}
              onClick={() => openLink(Links.wordDrop)}
              alt={"Word Drop Logo"}
            />
            <Button
              href={Links.wordDrop}
              label="Play Word Drop Here"
              icon={Brands.faGooglePlay}
            />

            <Typo.SectionHeader>Ascension</Typo.SectionHeader>
            <Typo.P>
              A simple infinate climber for Android. Tap the left side to jump,
              tap the right side to attack! How far can you climb?
            </Typo.P>
            <StyledImage
              src={"Images/Projects/Ascension.png"}
              onClick={() => openLink(Links.ascension)}
              alt={"Ascension Logo"}
            />
            <Button
              href={Links.ascension}
              label="Play Ascension Here"
              icon={Brands.faGooglePlay}
            />
            <br />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
