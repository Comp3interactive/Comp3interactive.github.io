import React from "react";
import styled from "@emotion/styled";
import { Card, Event } from "../Components";
import * as Tokens from "../Components/.Design/Tokens";
import * as Typo from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.span`
  color: ${Tokens.Colour.accent01};
`;

export const Events = (width: number) => {
  return (
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
  );
};
