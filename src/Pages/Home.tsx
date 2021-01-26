import React from "react";
import styled from "@emotion/styled";
import { Card, Button, InfoBar } from "../Components";
import * as Tokens from "../Components/.Design/Tokens";
import * as Typo from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../Utils/ExternalLinks";

const StyledImage = styled.img`
  border-radius: 10px;
  width: 50%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const IconWrapper = styled.span`
  color: ${Tokens.Colour.accent01};
`;

export const Home = (width: number) => {
  return (
    <Grid container>
      <h1 aria-label={"Comp-3 Interactive Home Page"} />
      <Grid item xs={12}>
        <InfoBar />
      </Grid>
      <Grid item sm={7} xs={12}>
        <Card>
          <Typo.SectionHeader>
            <IconWrapper>
              <FontAwesomeIcon icon={Icons.faAddressCard} />
            </IconWrapper>{" "}
            Who Are Comp-3 Interactive?
          </Typo.SectionHeader>
          <Typo.P>
            We are Comp-3 Interactive. We provide useful hints, tips and
            tutorials on the Unity3D game engine over multiple social media
            platforms. Started in 2019 with one goal, to provide the tutorials
            we wish we had ourselves when we started to learn game development.
          </Typo.P>
          <Typo.P>
            Over the past year we have grown a nice little following over on
            Facebook and Instagram of developers eager to learn new things, we
            then branched into YouTube to be able to give a more in-depth
            experience.
          </Typo.P>
          <Typo.P>
            Not only that, we also offer a selection of free and paid assets
            which are available to download via out Itch.io page and also via
            GitHub for code snippets and utilities.
          </Typo.P>
          <Typo.P>
            Check out the links below to learn more about the services we offer
            and find links to where you can find us, or if you're in a hurry to
            get learning you can click here to be taken directly to our YouTube
            page! Just don't forget to like, comment and subscribe!
          </Typo.P>

          <StyledImage
            src={"Images/Branding/LogoTransparent.png"}
            alt={"Comp-3 Interactive Logo"}
          />
          <Button
            href={Links.youtube}
            label="Start Learning Now"
            icon={Brands.faYoutube}
          />
          <br />
        </Card>
      </Grid>

      <Grid item sm={5} xs={12}>
        <Card>
          <Typo.SectionHeader>
            <IconWrapper>
              <FontAwesomeIcon icon={Icons.faLink} />
            </IconWrapper>{" "}
            Quick Links
          </Typo.SectionHeader>

          <Typo.P>
            Everyone knows you're busy and I know you probably wont be reading
            most of the content on this website, so here you go, quick links to
            everywhere you can find me!
          </Typo.P>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                href={Links.youtube}
                label="YouTube"
                icon={Brands.faYoutube}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.facebook}
                label="Facebook"
                icon={Brands.faFacebook}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.twitter}
                label="Twitter"
                icon={Brands.faTwitter}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.instagram}
                label="Instagram"
                icon={Brands.faInstagram}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.discord}
                label="Discord"
                icon={Brands.faDiscord}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.itch}
                label="Itch.io"
                icon={Brands.faItchIo}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.github}
                label="GitHub"
                icon={Brands.faGithub}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.googleplay}
                label="Google Play"
                icon={Brands.faGooglePlay}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                href={Links.patreon}
                label="Patreon"
                icon={Brands.faPatreon}
              />
            </Grid>
          </Grid>
          <br />
        </Card>
      </Grid>
    </Grid>
  );
};
