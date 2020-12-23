import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import {
  BackgroundShapes,
  Colour,
  WhiteHeader,
  SubHeader,
  Copyright,
  NavButton,
} from "../Components";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Links } from "../Utils/ExternalLinks";
import useWindowDimensions from "../Hooks/ScreenSize";
import * as Functions from "../Utils/Functions";
import * as PageContent from "./Content/Resume";

const PageWrapper = styled.div`
  @media only screen and (min-width: 1001px) {
    flex-direction: row;
  }

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderBar = styled.div`
  @media only screen and (max-width: 1000px) {
    height: 15vh;
    border-radius: 30px 30px 0px 0px;
    width: 97vw;
    min-width: 97vw;
  }

  min-width: 400px;
  border-radius: 30px;
  width: 25vw;
  height: 80vh;
  background-color: ${Colour.midGrey};
`;

const HeaderContent = styled.div`
  @media only screen and (max-width: 1000px) {
    margin: 10px;
    flex-direction: row;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  margin: 50px 90px 50px 50px;
  height: 85%;
`;

const ContentArea = styled.div`
  @media only screen and (max-width: 1000px) {
    height: 75vh;
    border-radius: 0px 0px 30px 30px;
    width: 97vw;
    height: 84vh;
    margin-left: 0px;
  }

  margin-left: -50px;
  border-radius: 30px;
  width: 50vw;
  height: 80vh;
  background-color: ${Colour.darkGrey};
`;

const ContentAreaContent = styled.div`
  @media only screen and (max-width: 1000px) {
    margin: 0px 20px;
  }

  margin: 0px 50px 20px 50px;
  height: 80%;

  overflow-y: scroll;
`;

const ContentAreaLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: row;
  padding: 10px;

  height: 10%;
`;

const LogoContainer = styled.img`
  @media only screen and (max-width: 1000px) {
    height: 75px;
  }

  height: 200px;

  -webkit-filter: drop-shadow(5px 5px 5px ${Colour.darkGrey});
  filter: drop-shadow(5px 5px 5px ${Colour.darkGrey});
`;

const LogoTextWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-left: 10px;
    margin-right: 20px;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

  border-radius: 15px;
  width: 50%;
  height: auto;
`;

export const Resume = () => {
  const { width } = useWindowDimensions();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPageContent, setCurrentPageContent] = useState(
    PageContent.AboutMe
  );

  const scrollToTop = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (scrollToTop.current !== null)
      scrollToTop!.current!.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
  }, [currentPageContent]);

  return (
    <>
      <BackgroundShapes color01={Colour.accent01} color02={Colour.accent02} />
      <PageWrapper>
        <HeaderBar>
          <HeaderContent>
            <LogoContainer src="./Images/Me.png" />
            <LogoTextWrapper>
              <WhiteHeader>Mike Lythgoe</WhiteHeader>
              <SubHeader>Jack of All Trades</SubHeader>
            </LogoTextWrapper>

            {width > 1000 && (
              <>
                <NavButton
                  href={Links.linkedin}
                  isExternalLink={true}
                  icon={Brands.faLinkedin}
                  iconSize={"20px"}
                  isSelected={false}
                />
                <Copyright>
                  Copyright &copy; Mike Lythgoe 1990-{Functions.GetYear()}.
                </Copyright>
              </>
            )}
          </HeaderContent>
        </HeaderBar>
        <ContentArea>
          <ContentAreaLinks>
            <NavButton
              icon={Icons.faIdBadge}
              label={"About"}
              isSelected={selectedIndex === 0}
              onClick={() => {
                setSelectedIndex(0);
                setCurrentPageContent(PageContent.AboutMe);
              }}
            />
            <NavButton
              icon={Icons.faLaptopCode}
              label={"Experience"}
              isSelected={selectedIndex === 1}
              onClick={() => {
                setSelectedIndex(1);
                setCurrentPageContent(PageContent.Experience);
              }}
            />
            <NavButton
              icon={Icons.faUniversity}
              label={"Education"}
              isSelected={selectedIndex === 2}
              onClick={() => {
                setSelectedIndex(2);
                setCurrentPageContent(PageContent.Education);
              }}
            />
            <NavButton
              icon={Icons.faAt}
              label={"Contact"}
              isSelected={selectedIndex === 3}
              onClick={() => {
                setSelectedIndex(3);
                setCurrentPageContent(PageContent.Contact);
              }}
            />
            {width < 1000 && (
              <NavButton
                href={Links.linkedin}
                isExternalLink={true}
                icon={Brands.faLinkedin}
                label="LinkedIn"
                iconSize={"20px"}
                isSelected={false}
              />
            )}
          </ContentAreaLinks>
          <ContentAreaContent>
            <div ref={scrollToTop} />
            {currentPageContent}
          </ContentAreaContent>
          {width <= 1000 && (
            <Copyright>
              Copyright &copy; Mike Lythgoe 1990-{Functions.GetYear()}.
            </Copyright>
          )}
        </ContentArea>
      </PageWrapper>
    </>
  );
};
