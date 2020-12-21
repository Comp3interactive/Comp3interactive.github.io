import React, { useState, useRef, useEffect } from "react";

import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { Row, Col, setConfiguration } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  PageWrapper,
  ScrollArea,
  ContentContainer,
  ImageContainer,
  SidebarContainer,
  SidebarButton,
} from "../Components/..Personal";

import * as Content from "../Content/Personal";

export const Personal = () => {
  setConfiguration({ maxScreenClass: "xl" });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPageContent, setCurrentPageContent] = useState(Content.AboutMe);

  const scrollToTop = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToTop.current !== null)
      scrollToTop!.current!.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
  }, [currentPageContent]);

  return (
    <PageWrapper>
      <Row nogutter>
        <Col md={1}>
          <SidebarContainer
            height={"80vh"}
            width={"100%"}
            color={"red"}
            verticalOffset={"3.5vh"}
          >
            <SidebarButton
              isSelected={selectedIndex === 0}
              onClick={() => {
                setSelectedIndex(0);
                setCurrentPageContent(Content.AboutMe);
              }}
            >
              <FontAwesomeIcon icon={Icons.faAddressCard} />
            </SidebarButton>

            <SidebarButton
              isSelected={selectedIndex === 1}
              onClick={() => {
                setSelectedIndex(1);
                setCurrentPageContent(Content.Experience);
              }}
            >
              <FontAwesomeIcon icon={Icons.faLaptopCode} />
            </SidebarButton>

            <SidebarButton
              isSelected={selectedIndex === 2}
              onClick={() => {
                setSelectedIndex(2);
                setCurrentPageContent(Content.Education);
              }}
            >
              <FontAwesomeIcon icon={Icons.faUniversity} />
            </SidebarButton>

            <SidebarButton
              isSelected={selectedIndex === 3}
              onClick={() => {
                setSelectedIndex(3);
                setCurrentPageContent(Content.ContactMe);
              }}
            >
              <FontAwesomeIcon icon={Icons.faAt} />
            </SidebarButton>

            <SidebarButton
              isSelected={selectedIndex === 4}
              onClick={() => {
                setSelectedIndex(4);
                setCurrentPageContent(Content.Comp3Interactive);
              }}
            >
              <strong>&#123; &#125;</strong>
            </SidebarButton>
          </SidebarContainer>
        </Col>
        <Col md={4}>
          <ImageContainer
            height={"95vh"}
            width={"100%"}
            color={"red"}
            verticalOffset={"-3.5vh"}
          >
            <img src={"./Images/Me.png"} height={"100%"} />
          </ImageContainer>
        </Col>
        <Col md={7}>
          <ContentContainer
            height={"80vh"}
            width={"100%"}
            color={"red"}
            verticalOffset={"3.5vh"}
          >
            <ScrollArea>
              <div ref={scrollToTop} />
              {currentPageContent}
            </ScrollArea>
          </ContentContainer>
        </Col>
      </Row>
    </PageWrapper>
  );
};
