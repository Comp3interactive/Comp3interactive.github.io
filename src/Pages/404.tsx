import React from "react";
import { useHistory } from "react-router-dom";

import styled from "@emotion/styled";
import {
  BackgroundShapes,
  Colour,
  WhiteHeader,
  SubHeader,
  Button,
  Copyright,
  PageHeader,
  Card,
  P,
  SectionHeader,
} from "../Components";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Links } from "../Utils/ExternalLinks";
import useWindowDimensions from "../Hooks/ScreenSize";
import * as Functions from "../Utils/Functions";

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
    width: 90vw;
    min-width: 90vw;
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
    width: 90vw;
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

  margin: 50px 50px 20px 50px;
  height: 80%;

  overflow-y: scroll;
`;

const LogoContainer = styled.img`
  @media only screen and (max-width: 1000px) {
    height: 75px;
  }

  height: 200px;
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

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FourZeroFour = () => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const onClick = () => {
    history.push("/");
  };

  return (
    <>
      <BackgroundShapes color01={Colour.accent01} color02={Colour.accent02} />
      <PageWrapper>
        <HeaderBar>
          <HeaderContent>
            <LogoContainer src="./Images/Bottlecaps/Comp3.png" />
            <LogoTextWrapper>
              <WhiteHeader>Comp-3 Interactive</WhiteHeader>
              <SubHeader>Subscribe.Follow.Learn()</SubHeader>
            </LogoTextWrapper>

            <Button
              href={Links.youtube}
              label={width > 1000 ? "Start Learning" : ""}
              icon={Brands.faYoutube}
            />
            {width > 1000 && (
              <Copyright>
                Copyright &copy; Comp-3 Interactive 2019-{Functions.GetYear()}.
                <br />
                All rights reserved
              </Copyright>
            )}
          </HeaderContent>
        </HeaderBar>
        <ContentArea>
          <ContentAreaContent>
            <PageHeader>Oops... 404</PageHeader>
            <SectionHeader>STOP MESSING AROUND!</SectionHeader>
            <Image src="./Images/Illustrations/404.png" />
            <Card>
              <P>
                Oops... Somehow you've managed to find a page that doesn't
                actually exist!!
              </P>
              <P>
                If you think this might be a mistake then please let me know so
                I can fix it as soon as possible! Otherwise, click the link
                below to be taken back to the main website!
              </P>
            </Card>
            <Center>
              <Button
                href="/"
                label={"Back to civilization"}
                onClick={onClick}
                icon={Icons.faArrowAltCircleLeft}
              />
            </Center>
          </ContentAreaContent>
        </ContentArea>
        {width <= 1000 && (
          <Copyright>
            Copyright &copy; Comp-3 Interactive 2019-{Functions.GetYear()}.
            <br />
            All rights reserved
          </Copyright>
        )}
      </PageWrapper>
    </>
  );
};
