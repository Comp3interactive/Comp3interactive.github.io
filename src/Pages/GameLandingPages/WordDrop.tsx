import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import styled from "@emotion/styled";
import { DownloadGameButton } from "../../Components/Button/Button";

const Image = styled.img`
  width: 90%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const Header = styled.div`
  font-size: 5rem;
  font-weight: 900;
  color: #d7c3a2;
  text-align: center;

  text-shadow: 3px 3px #000000;
`;

const Body = styled.body`
  background-image: linear-gradient(to bottom right, #a520e3, #770bcb);
`;

const Offset = styled.div`
  padding-top: 30px;
`;

const BodyWrapper = styled.div`
  padding: 5px 15px;
  font-weight: 600;
  margin-bottom: 15px;
  background-color: #770bcb;
  color: #d7c3a2;

  border-radius: 25px;

  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.3);
`;

export const WordDrop = () => {
  setConfiguration({ maxScreenClass: "xl" });
  return (
    <Body>
      <Offset />
      <Container>
        <Row>
          <Col md={5}>
            <Image src="./Images/GameScreens/WordDrop.png" />
          </Col>

          <Col md={7}>
            <Header>WORD DROP</Header>
            <BodyWrapper>
              <p>
                Fancy yourself as a bit of a word-smith? Then challenge yourself
                and see how well you do in Word Drop! ⬇️
              </p>
              <p>
                The aim of the game is simple... You have 3 minutes to find as
                many words as possible! Every letter has an individual score
                value which accumulate to a total word score, the higher the
                score, the better you do!
              </p>
              <p>
                <strong>TOLD YOU IT WAS SIMPLE! ❤️</strong>
              </p>
              <p>
                Just make sure you keep an eye out for the hourglass icon ⏳,
                tiles with this icon add 10 seconds to your round timer making
                it perfect to achieve higher scores!
              </p>
              <p>
                Finally we have tile multipliers! These are easy to spot by
                their different colour, the multipliers in the game are:
              </p>
              <ul>
                <li>
                  <strong>Double Letter</strong> - DL - Doubles the value of
                  that tile
                </li>
                <li>
                  <strong>Double Word</strong> - DW - Doubles the value of the
                  entire word
                </li>
                <li>
                  <strong>TripleLetter</strong> - TL - Triples the value of that
                  tile
                </li>
                <li>
                  <strong>Triple Word</strong> - TW - Triples the value of the
                  entire word
                </li>
              </ul>
              <p>
                These multipliers can be stacked! Use them strategically for
                HUGE score boosts!
              </p>
              <p>
                ✅ Over 370,000 to choose from 🔠
                <br />
                ✅ Super quick loading times ⏳
                <br />✅ Stat tracking for things such as you best overall
                score, your best individual word score, your longest word and
                more! 📝
                <br />✅ Entirely offline, no internet connection required!
                <br />✅ Beautiful colours and UI 🟪
                <br />✅ Challenging and rewarding 🏆
                <br />✅ Build your vocabulary 💡
                <br />✅ Hours of fun 🤪
              </p>
            </BodyWrapper>
            <DownloadGameButton
              href="https://play.google.com/store/apps/details?id=com.Comp3Interactive.WordDrop"
              color={"#df59f0"}
              textColor={"#d7c3a2"}
            />
          </Col>
        </Row>
      </Container>
      <Offset />
      <Footer />
    </Body>
  );
};
