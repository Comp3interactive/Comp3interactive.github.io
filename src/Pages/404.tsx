import React from "react";
import * as Typo from "../Components/Typography/Typography";
import styled from "@emotion/styled";
import { Card } from "../Components";

const Wrapper404 = styled.div<{ width: number }>`
  ${(props) => props.width > 600 && "display: flex;"};
`;

const Styled404 = styled.img<{ width: number }>`
  ${(props) =>
    props.width > 600
      ? "width: 20%; height: 20%; margin: 50px;"
      : "width:100%; margin-top: 20px;"};
`;

export const FourZeroFour = (width: number) => {
  return (
    <Card>
      <h1 aria-label={"404 Page"} />
      <Wrapper404 width={width}>
        <Styled404
          src="Images/Illustrations/404.png"
          width={width}
          alt={"404 Image"}
        />

        <div>
          <Typo.SectionHeader>STOP SCREWING AROUND</Typo.SectionHeader>

          <Typo.P>
            This page doesn't exist, if you think this might be an error then
            please let me know so I can fix it!
          </Typo.P>

          <Typo.P>
            If you were just messing about in the URL bar then sorry, no easter
            eggs for you here... Click the links at the top of the page to
            navigate back to an ACTUAL page!
          </Typo.P>

          <Typo.P>
            But since you have this kind of free time, maybe you should be
            watching my tutorials on YouTube... Just a thought!
          </Typo.P>
        </div>
      </Wrapper404>
    </Card>
  );
};
