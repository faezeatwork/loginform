import React from "react";
import Inputs from "./Inputs";
import { RadioBtns } from "./RadioBtns";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;

    case "validation-type":
      return <RadioBtns {...props} />;
  }
};
