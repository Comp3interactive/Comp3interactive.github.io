import React from "react";
import useWindowDimensions from "../Hooks/ScreenSize";
import styled from "@emotion/styled";
import { Footer, Card, Event, Header, NavLinks, InfoBar } from "../Components";
import * as Tokens from "../Components/.Design/Tokens";
import * as Typo from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.div<{ width: number }>`
  display: block;
  background-color: ${Tokens.Colour.darkGrey};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) =>
    props.width < 600 ? "100%" : props.width < 1300 ? "90%" : "60%"};
`;

const IconWrapper = styled.span`
  color: ${Tokens.Colour.accent01};
`;

export const Events = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrap width={width}>
      <Header />
      <NavLinks activePage={"Events"} />
      <InfoBar />

      <Grid container>
        <Grid item md={6} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Icons.faCalendarAlt} />
              </IconWrapper>{" "}
              Current Events
            </Typo.SectionHeader>
            <Typo.P>
              Unfortunately, there are no events active at the moment.
            </Typo.P>
            <Typo.P>Check back soon for more game jams!</Typo.P>
          </Card>
        </Grid>

        <Grid item md={6} xs={12}>
          <Card>
            <Typo.SectionHeader>
              <IconWrapper>
                <FontAwesomeIcon icon={Icons.faCalendarAlt} />
              </IconWrapper>{" "}
              Past Events
            </Typo.SectionHeader>
          </Card>

          <Event
            title={"Jam Butty"}
            year={"2020"}
            winner={"Autoquark"}
            winnerHref={"https://autoquark.itch.io/release-day"}
            winningEntry={"Release Day"}
            imageURL="/Images/Events/ReleaseDay.png"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12} xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Wrap>
  );
};
