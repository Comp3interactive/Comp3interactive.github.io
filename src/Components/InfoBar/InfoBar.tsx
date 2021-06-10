import React from "react";
import { Grid } from "@material-ui/core";
import { Counter } from "../Counter/Counter";

export const InfoBar = () => {
  return (
    <Grid container>
      <Grid item md={3} xs={6}>
        <Counter numberValue={"5000+"} text={"Subscribers"} />
      </Grid>

      <Grid item md={3} xs={6}>
        <Counter numberValue={"100+"} text={"Tutorials"} />
      </Grid>

      <Grid item md={3} xs={6}>
        <Counter numberValue={"7+"} text={"Years Experience"} />
      </Grid>

      <Grid item md={3} xs={6}>
        <Counter numberValue={"1"} text={"Year on YouTube"} />
      </Grid>
    </Grid>
  );
};
