import React from "react";
import { PageHeader, Button, P, Card, SubHeader } from "../../Components";
import { Links } from "../../Utils/ExternalLinks";
import * as Brands from "@fortawesome/free-brands-svg-icons";

export const Support = () => {
  return (
    <>
      <PageHeader>Support Us</PageHeader>
      <Card>
        <SubHeader>
          Wondering how you can help us at Comp-3 Interactive? Well there are a
          few ways...
        </SubHeader>
        <P>
          - You can purchase some of the premium assets we have available on our
          Itch.io page! You help us and in return you get some snazzy new game
          assets!
        </P>
        <P>
          - You can support us over on Patreon! Each tier comes with different
          benefits, check out the link below to see if any seems right for you!
        </P>
        <P>
          - Download our games and play them or watch our YouTube videos, as
          simple as that. Ad revenue is a huge help and keeps the lights on
          around here!
        </P>
        <Button
          href={Links.patreon}
          icon={Brands.faPatreon}
          label={"Support Us On Patreon"}
          isExternalLink={true}
          width={"96%"}
        />
      </Card>
    </>
  );
};
