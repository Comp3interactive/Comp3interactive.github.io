import styled from "@emotion/styled";
import { Colour, FontSize, FontWeight } from "../.Design/Tokens";

export const PageHeader = styled.div`
  color: ${Colour.accent02};
  font-size: ${FontSize.large};
  font-weight: ${FontWeight.bold};
`;

export const WhiteHeader = styled.div`
  @media only screen and (max-width: 1000px) {
    text-align: left;
    font-size: 5vw;
  }

  color: ${Colour.offWhite};
  font-size: 3vw;
  font-weight: ${FontWeight.bold};
  text-align: center;
`;

export const SectionHeader = styled.div`
  color: ${Colour.offWhite};
  font-size: ${FontSize.medium};
  font-weight: ${FontWeight.semiBold};
`;

export const SubHeader = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 3vw;
    text-align: left;
  }

  color: ${Colour.lightGrey};
  font-size: 1.5vw;
  font-weight: ${FontWeight.regular};
  text-align: center;
`;

export const P = styled.p`
  color: ${Colour.offWhite};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.extraLight};
`;

export const NavLabel = styled.div`
  color: ${Colour.offWhite};
  font-size: ${FontSize.tiny};
  font-weight: ${FontWeight.thin};
`;

export const Copyright = styled.div`
  color: ${Colour.lightGrey};
  font-size: ${FontSize.tiny};
  font-weight: ${FontWeight.extraLight};
  text-align: center;
`;

export const Tag1 = styled.div`
  color: ${Colour.offWhite};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.extraLight};
`;

export const Tag2 = styled.div`
  color: ${Colour.white};
  font-size: ${FontSize.tiny};
  font-weight: ${FontWeight.extraLight};
`;
