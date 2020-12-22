import React from "react";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import styled from "@emotion/styled";
import { BackgroundShapes } from "../Components";

export const Home = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <BackgroundShapes color01={"red"} color02={"green"} />
    </>
  );
};
