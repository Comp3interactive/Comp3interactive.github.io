import React from "react";
import { PageHeader, Card, NavButton } from "../../Components";
import { Links } from "../../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";

export const LinksContent = () => {
  return (
    <>
      <PageHeader>We're Everywhere</PageHeader>
      <Card wrapContent={true}>
        <NavButton
          href={Links.facebook}
          isExternalLink={true}
          icon={Brands.faFacebook}
          label={"Facebook"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.instagram}
          isExternalLink={true}
          icon={Brands.faInstagram}
          label={"Instagram"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.twitter}
          isExternalLink={true}
          icon={Brands.faTwitter}
          label={"Twitter"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.discord}
          isExternalLink={true}
          icon={Brands.faDiscord}
          label={"Discord"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.itch}
          isExternalLink={true}
          icon={Brands.faItchIo}
          label={"Itch.io"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.github}
          isExternalLink={true}
          icon={Brands.faGithub}
          label={"GitHub"}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.googleplay}
          isExternalLink={true}
          label={"Google Play"}
          icon={Brands.faGooglePlay}
          iconSize={"20px"}
          isSelected={false}
        />

        <NavButton
          href={Links.patreon}
          isExternalLink={true}
          label={"Patreon"}
          icon={Brands.faPatreon}
          iconSize={"20px"}
          isSelected={false}
        />
      </Card>
    </>
  );
};
