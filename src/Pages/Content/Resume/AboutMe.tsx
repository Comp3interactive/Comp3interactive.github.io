import React from "react";
import { PageHeader, P, SectionHeader } from "../../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
  return (
    <>
      <PageHeader>About Me</PageHeader>
      <SectionHeader>
        <FontAwesomeIcon icon={Icons.faHandPointRight} /> Straight To The Point
        <P>
          I'm a highly motivated and experienced software engineer with over 6
          years in the industry and a knowledge of a plethora of coding and
          utility languages including:
          <br /> <br />
          <strong>
            C# | TypeScript | ReactJS | HTML | CSS | SQL | Java | JavaScript |
            Python | Cobol | JCL | EasyTrieve
          </strong>
        </P>
      </SectionHeader>

      <SectionHeader>
        <FontAwesomeIcon icon={Icons.faBuilding} /> Work Life
        <P>
          I started my software journey over 6 years ago in mainframe
          development and maintenance, using COBOL, CICS, JCL and EasyTrieve in
          a high pressure environment, providing services to The Co-operative
          Bank, expanding and maintaining their back-end mainframe systems and
          implementing new customer service screens for the customer support
          teams.
        </P>
        <P>
          Five years of staring at mainframe compiler screens took it's toll and
          I decided to branch out into a more modern medium. This is when I
          started fo focus on ReactJS web development, again, for the
          Co-operative Bank. This time doing my part in a complete remake the
          online banking website, upgrading the site from using Kony framework
          into a shiny new React application! This process is still underway and
          we are rolling out the new site in multiple phases.
        </P>
      </SectionHeader>

      <SectionHeader>
        <FontAwesomeIcon icon={Icons.faUserCircle} /> Personal Life
        <P>
          For the last yew years I've been making my own mobile and PC games
          using the Unity3D game engine and C# coding language. This has become
          a huge part of my life in recent times as, ever since the great 2020
          Covid-19 lockdowns, I have been keeping myself occupied by providing
          aspiring game developers with game dev tutorials over on YouTube under
          the name Comp-3 Interactive.
        </P>
        <P>
          Comp-3 Interactive has gathered a rather large community over the last
          12 months which has led me to meeting a lot of interesting people,
          along with opening up channels for me to chat with the YouTubers which
          inspired me to start learning game development all those years ago.
        </P>
      </SectionHeader>
    </>
  );
};
