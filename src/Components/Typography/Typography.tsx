import styled from "@emotion/styled";
import * as Tokens from "../.Design/Tokens";

export const ConstructionTextStyle = styled.div`
  font-size: ${Tokens.Font.sizes.large};
  text-align: center;
  margin-bottom: 50px;
  color: white;
  margin-top: 20px;

  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledHeader = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: ${Tokens.Font.sizes.large};
  }

  font-size: ${Tokens.Font.sizes.xl};
  font-weight: ${Tokens.Font.weight.bold};
  color: ${Tokens.Colour.white};
  text-align: center;
`;

export const StyledSubHeader = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: ${Tokens.Font.sizes.small};
  }

  font-size: ${Tokens.Font.sizes.medium};
  font-weight: ${Tokens.Font.weight.bold};
  color: ${Tokens.Colour.green};
  text-align: center;
`;

export const StyledText = styled.div`
  font-size: ${Tokens.Font.sizes.medium};
  color: ${Tokens.Colour.darkGrey};
`;

export const StyledCardHeaderText = styled.div`
  font-size: ${Tokens.Font.sizes.large};
  font-weight: ${Tokens.Font.weight.bold};
  color: ${Tokens.Colour.white};
`;

export const StyledCardSubtitleText = styled.div`
  font-size: ${Tokens.Font.sizes.medium};
  color: ${Tokens.Colour.darkGrey};
`;

export const StyledCardBodyText = styled.div`
  font-size: ${Tokens.Font.sizes.small};
  color: ${Tokens.Colour.mediumGrey};
`;

export const StyledCardFooterText = styled.div`
  font-size: ${Tokens.Font.sizes.tiny};
  font-style: italic;
  color: ${Tokens.Colour.lightGrey};
  font-weight: ${Tokens.Font.weight.bold};
`;
