import React from "react";
import styled from "@emotion/styled";
import { Card, Button } from "../Components";
import * as Tokens from "../Components/.Design/Tokens";
import * as Typo from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../Utils/ExternalLinks";

const IconWrapper = styled.span`
  color: ${Tokens.Colour.accent01};
`;

const LargeIcon = styled.div`
  color: ${Tokens.Colour.offWhite};
  font-size: 100px;
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 50%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const WallpaperThumb = styled.img`
  border-radius: 10px;
  width: 100%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Downloads = (width: number) => {
  const openWallpaper = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Grid container>
      <h1 aria-label={"Downloads"} />
      <Grid container>
        <Grid item sm={4} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Brands.faItchIo} />
              </IconWrapper>{" "}
              Downloads - Assets
            </Typo.SectionHeader>
            <LargeIcon>
              <FontAwesomeIcon icon={Brands.faItchIo} />
            </LargeIcon>
            <Typo.P>
              A mixture of free and premium game assets ready to download and
              import into your projects!
            </Typo.P>
            <Typo.P>
              Downloads include pixel art dungeons sets, stylised UI packs and
              more!
            </Typo.P>
            <Button
              href={Links.itch}
              label="Browse Assets"
              icon={Brands.faItchIo}
            />
            <br />
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Brands.faGithub} />
              </IconWrapper>{" "}
              Downloads - Code
            </Typo.SectionHeader>
            <LargeIcon>
              <FontAwesomeIcon icon={Brands.faGithub} />
            </LargeIcon>
            <Typo.P>
              Useful code snippets and utilities available to download for free,
              many of which are from my YouTube tutorials
            </Typo.P>
            <Typo.P>
              Downloads include mobile phone vibrator controllers, a basic Unity
              Ads manager and more utility scripts!
            </Typo.P>
            <Button
              href={Links.github}
              label="Browse Code Snippets"
              icon={Brands.faGithub}
            />
            <br />
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Brands.faGithub} />
              </IconWrapper>{" "}
              Wallpapers
            </Typo.SectionHeader>
            <StyledImage
              src={"Images/Branding/LogoTransparent.png"}
              alt={"Comp-3 Interactive Logo"}
            />
            <Typo.P>
              Recently I created a new look... A new logo, social banners and so
              on, I also created myself a few wallpapers for my PCs and Mac.
              Last time I had a few requests for those wallpapers from people so
              here you go! Show your support by sporting our logo on your
              desktop!
            </Typo.P>

            <Typo.P>
              Just click on the images below to load up the 1920x1080 versions
              in a new window and save the image!
            </Typo.P>

            <Typo.SectionHeader>Purple on Grey</Typo.SectionHeader>
            <WallpaperThumb
              src={"Images/Wallpapers/Thumbnails/WallpaperThumb_PoG.png"}
              onClick={() =>
                openWallpaper("Images/Wallpapers/Wallpapers_PurpleOnGrey.png")
              }
              alt={"Button to download wallpaper"}
            />

            <Typo.SectionHeader>White on Grey</Typo.SectionHeader>
            <WallpaperThumb
              src={"Images/Wallpapers/Thumbnails/WallpaperThumb_WoG.png"}
              onClick={() =>
                openWallpaper("Images/Wallpapers/Wallpapers_WhiteOnGrey.png")
              }
              alt={"Button to download wallpaper"}
            />

            <Typo.SectionHeader>White on Purple</Typo.SectionHeader>
            <WallpaperThumb
              src={"Images/Wallpapers/Thumbnails/WallpaperThumb_WoP.png"}
              onClick={() =>
                openWallpaper("Images/Wallpapers/Wallpapers_WhiteOnPurple.png")
              }
              alt={"Button to download wallpaper"}
            />
            <br />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
