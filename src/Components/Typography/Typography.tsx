import styled from "@emotion/styled";
import { Colour, FontSize, FontWeight } from "../.Design/Tokens";

export const PageHeader = styled.h1`
  color: ${Colour.offWhite};
  font-size: ${FontSize.large};
  font-weight: ${FontWeight.semiBold};
`;

export const SectionHeader = styled.h2`
  color: ${Colour.offWhite};
  font-size: ${FontSize.medium};
  font-weight: ${FontWeight.semiBold};
`;

export const P = styled.p`
  color: ${Colour.lightGrey};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.regular};
`;

export const PSpan = styled.span`
  color: ${Colour.lightGrey};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.regular};
`;

export const HighlightP = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.regular};
`;

export const HighlightSectionHeader = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${FontSize.medium};
  font-weight: ${FontWeight.semiBold};
`;

export const Copyright = styled.div`
  color: ${Colour.lightGrey};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.light};
  text-align: center;
`;
