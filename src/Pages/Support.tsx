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

export const Support = (width: number) => {
  return (
    <Grid container>
      <h1 aria-label={"Support"} />
      <Grid item md={8} xs={12}>
        <Card>
          <Typo.SectionHeader>
            <IconWrapper>
              <FontAwesomeIcon icon={Icons.faHeartbeat} />
            </IconWrapper>{" "}
            Support
          </Typo.SectionHeader>
          <Typo.P>
            Wondering how you can help us at Comp-3 Interactive? Well there are
            a few ways...
          </Typo.P>
          <Typo.P>
            - You can purchase some of the premium assets we have available on
            our Itch.io page! You help us and in return you get some snazzy new
            game assets!
          </Typo.P>
          <Typo.P>
            - You can support us over on Patreon! Each tier comes with different
            benefits, check out the link below to see if any seems right for
            you!
          </Typo.P>
          <Typo.P>
            - Download our games and play them or watch our YouTube videos, as
            simple as that. Ad revenue is a huge help and keeps the lights on
            around here!
          </Typo.P>

          <Button
            href={Links.patreon}
            label="Support Us"
            icon={Brands.faPatreon}
          />
          <br />
        </Card>
      </Grid>

      <Grid item md={4} xs={12}>
        <Card>
          <Typo.SectionHeader>
            <IconWrapper>
              <FontAwesomeIcon icon={Icons.faSearchDollar} />
            </IconWrapper>{" "}
            Transparency
          </Typo.SectionHeader>
          <Typo.P>
            I want you to know where your patronage is spent, it's not all on
            beer!
          </Typo.P>

          <Typo.P>
            Currently the funds gained from Patreon, asset sales and YouTube ad
            revenue regularly go / have gone / will go towards buying:
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faPenFancy} /> Adobe Create Cloud Suite
            monthly subscriptions
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faMicrophone} /> Higher quality
            recording equipment
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faBuilding} /> Office space
            improvements
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faGamepad} /> Buying asset packs from
            other creators for tutorials / personal projects
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faAward} /> Prizes for channel
            giveaways
          </Typo.P>

          <Typo.P>
            <FontAwesomeIcon icon={Icons.faBeer} /> Maybe a <em>little</em> bit
            of beer
          </Typo.P>
        </Card>
      </Grid>
    </Grid>
  );
};
