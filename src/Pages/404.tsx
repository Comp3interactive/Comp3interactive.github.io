import React from "react";

import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";

import styled from "@emotion/styled";

export const FourZeroFour = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      404
      <Footer />
    </>
  );
};
