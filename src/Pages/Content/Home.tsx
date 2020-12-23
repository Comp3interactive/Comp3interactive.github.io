import React from "react";
import styled from "@emotion/styled";
import { PageHeader, SectionHeader, P, Button, Card } from "../../Components";
import { Links } from "../../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";

export const StyledEvent = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

  border-radius: 15px;
  width: 50%;
  height: 100%;
  margin: auto;
`;

export const HomeContent = () => {
  return (
    <>
      <PageHeader>Welcome</PageHeader>
      <Card wrapContent={true}>
        <div>
          <P>
            We are Comp-3 Interactive. We provide useful hints, tips and
            tutorials on the Unity3D game engine over multiple social media
            platforms. Started in 2019 with one goal, to provide the tutorials
            we wish we had ourselves when we started to learn game development.
          </P>
          <P>
            Over the past year we have grown a nice little following over on
            Facebook and Instagram of developers eager to learn new things, we
            then branched into YouTube to be able to give a more in-depth
            experience.
          </P>
          <P>
            Not only that, we also offer a selection of free and paid assets
            which are available to download via out Itch.io page and also via
            GitHub for code snippets and utilities.
          </P>
          <P>
            Check out the links below to learn more about the services we offer
            and find links to where you can find us, or if you're in a hurry to
            get learning you can click here to be taken directly to our YouTube
            page! Just don't forget to like, comment and subscribe!
          </P>
        </div>
        <Image src="./Images/Me2.jpeg" />
      </Card>

      <SectionHeader>Suggested Series</SectionHeader>
      <Card wrapContent={true}>
        <div>
          <P>
            One of our most popular series with beginners is our Lets Make:
            Invaders From Outerspace series.
          </P>
          <P>
            A 20 episode series where we show you, in detail, how to create your
            own mobile version of Space Invaders from scratch!
          </P>
          <P>
            All assets used within the project are available to download from
            our Itch.io page and are completely free to use in any capacity.
          </P>
          <Button
            href={Links.youtube}
            isExternalLink={true}
            label={"Go To Series"}
            width={"90%"}
            icon={Brands.faYoutube}
          />
        </div>

        <Image src="./Images/InvadersFromOuterspace.png" />
      </Card>
    </>
  );
};
