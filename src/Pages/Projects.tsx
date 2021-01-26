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
            <Typo.SectionHeader>Behind Closed Doors</Typo.SectionHeader>
            <Typo.P>
              Behind Closed Doors is a PS1 inspired, first person, horror
              survival game! You play officer [Has No Name Yet], you find
              yourself trapped inside a mansion after an investigation gone
              wrong... You need to escape as quickly as you can before the axe
              wielding manic tracks you down!
            </Typo.P>
            <Typo.P>
              The current plan is for a Steam release but this is my current
              fulltime project. There is no estimated release date at the moment
              because I'm working around my day job and family life.
            </Typo.P>

            <StyledImage
              src={"Images/Projects/BehindClosedDoors.png"}
              width={"100%"}
              onClick={() => openLink(Links.behindClosedDoorsTwitter)}
              alt={"Behind Closed Doors Logo"}
            />
            <Button
              href={Links.behindClosedDoorsTwitter}
              label="Follow The Devlogs"
              icon={Brands.faTwitter}
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
