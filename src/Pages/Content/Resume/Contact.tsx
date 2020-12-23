import React from "react";
import { PageHeader, P, SectionHeader, Colour } from "../../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

export const Email = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-style: bold;
  color: ${Colour.accent01};
`;

export const Contact = () => {
  return (
    <>
      <PageHeader>Contace Me</PageHeader>
      <SectionHeader>Interested in chatting?</SectionHeader>
      <P>
        Being an online CV I don't really want all of my personal information
        readily available to all. If you'd like to contact me then please drop
        me an email and I'll happily provide any further contact information to
        make communication easier.
      </P>

      <Email href="mailto:m.lythgoe90@gmail.com">
        <FontAwesomeIcon icon={Icons.faEnvelope} /> m.lythgoe90@gmail.com
      </Email>
    </>
  );
};
