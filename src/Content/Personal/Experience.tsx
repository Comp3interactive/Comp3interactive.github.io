import React from "react";
import {
  Header,
  Text,
  InfoLabel,
  SectionHeader,
  WorkPlace,
} from "../../Components/..Personal";
import { WorkExperience } from "./ExperienceContent";

export const Experience = () => {
  return (
    <>
      <Header>&#123; Experience &#125;</Header>
      <InfoLabel>What Have I Done?</InfoLabel>

      {WorkExperience.workPlaces.map((workPlace, i) => (
        <WorkPlace
          key={`Workplace_${i}`}
          employer={workPlace.employer}
          positions={workPlace.positions}
          overview={workPlace.overview}
          bullets={workPlace.bullets}
        />
      ))}
      <SectionHeader>Technical Skills</SectionHeader>
      <Text>
        Software development, testing and utilisation of various technologies
        (C#, .NET Framework, Python, ReactJS, TypeScript, JavaScript, COBOL,
        CICS, JCL, EasyTrieve, SQL, Java, HTML, CSS, VBA coding and macros for
        the Office suite)
      </Text>
      <Text>Windows task automation using Python scripting</Text>
      <Text>Mobile application development</Text>
      <Text>WinForms/WPF development</Text>
      <Text>Well versed with the Microsoft Office suite</Text>
      <Text>
        Well versed with the Adobe Creative suite (Photoshop, Illustrator)
      </Text>
      <Text>3D modelling skills using Blender</Text>
      <Text>
        Game Development skills for PC and Android using Unity Game Engine
        Hardware troubleshooting
      </Text>

      <SectionHeader>Personal Skills</SectionHeader>
      <Text>Understanding and attaining targets</Text>
      <Text>Working to deadlines with a high standard of outcome</Text>
      <Text>Proactive in putting forward ideas and solutions</Text>
      <Text>
        Excellent communication skills with colleagues, end users and management
        alike
      </Text>
      <Text>Problem solving</Text>
      <Text>Keen eye for details</Text>
      <Text>Ability to work independently or as part of a team</Text>
    </>
  );
};
