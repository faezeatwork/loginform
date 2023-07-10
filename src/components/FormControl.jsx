import React from "react";
import Inputs from "./Inputs";
import { RadioBtns } from "./RadioBtns";
import Date from "./Date";
import { File } from "./File";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;

    case "validation-type":
      return <RadioBtns {...props} />;

    case "date":
      return <Date {...props} />;

    case "file":
      return <File {...props} />;
  }
};
