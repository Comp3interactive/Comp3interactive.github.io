import React from "react";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import { Container, Row, Col, setConfiguration } from "react-grid-system";

import { Navbar } from "../Components/Navbar/Navbar";
import { Panel } from "../Components/Card/Panel";

import { Content } from "../Content/DevLogs";

export const DevLogs = () => {
  setConfiguration({ maxScreenClass: "lg" });
  return (
    <>
      <Navbar />

      <Header headerText={"Dev.Logs()"} />

      <Container>
        {Content.map((logEntry, i) => (
          <Row key={i}>
            <Col>
              <Panel
                header={logEntry.header}
                date={logEntry.date}
                body={logEntry.body}
              />
            </Col>
          </Row>
        ))}
      </Container>

      <Footer />
    </>
  );
};
