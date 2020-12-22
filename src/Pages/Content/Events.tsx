import React from "react";
import { PageHeader, SectionHeader, P, Card, Event } from "../../Components";

export const Events = () => {
  return (
    <>
      <PageHeader>Events</PageHeader>
      <SectionHeader>Current Events</SectionHeader>
      <Card>
        <P>Unfortunatly, there are no events active at the moment.</P>
        <P>Check back soon for more game jams!</P>
      </Card>

      <SectionHeader>Previous Events</SectionHeader>
      <Event
        eventName={"Comp-3 Interactive Jam Butty 2020"}
        eventLink={"https://itch.io/jam/comp-3-jam-butty-01"}
        theme={"Bugs"}
        winnerName={"Autoquark"}
        winnerLink={"https://autoquark.itch.io/release-day"}
      />
    </>
  );
};
