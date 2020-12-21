import React from "react";
import { Header, Text, InfoLabel, Email } from "../../Components/..Personal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export const ContactMe = () => {
  return (
    <>
      <Header>&#123; Contact &#125;</Header>
      <InfoLabel>Interested in chatting?</InfoLabel>

      <Text>
        Being an online CV I don't really want all of my personal information
        readily available to all. If you'd like to contact me then please drop
        me an email and I'll happily provide any further contact information to
        make communication easier.
      </Text>

      <Email href="mailto:m.lythgoe90@gmail.com">
        <FontAwesomeIcon icon={Icons.faEnvelope} /> m.lythgoe90@gmail.com
      </Email>
    </>
  );
};
