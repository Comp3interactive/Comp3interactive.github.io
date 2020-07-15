import React from "react";
import { ConstructionText, Text } from "../Components/Typography/Typography";
import { Link } from "../Components/Link/Link";

export const UnderConstruction = () => {
  return (
    <>
      <ConstructionText>THIS PAGE IS UNDER CONSTRUCTION</ConstructionText>
      <Text>
        Find us here: <Link href="#" label="Testing" />
      </Text>
    </>
  );
};
