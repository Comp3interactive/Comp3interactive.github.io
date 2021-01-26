import React from "react";
import { useHistory } from "react-router-dom";
import { Copyright } from "../Components";
import useWindowDimensions from "../Hooks/ScreenSize";
import * as DateHelper from "../Utils/DateHelper";

export const FourZeroFour = () => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  return (
    <>
      <Copyright>
        Copyright &copy; Comp-3 Interactive 2019-{DateHelper.GetYear()}.
        <br />
        All rights reserved
      </Copyright>
    </>
  );
};
