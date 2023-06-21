import React from "react";
import Inputs from "./Inputs";

export const FormControl = (props) => {
  switch (props.control) {
    case "email":
      return <Inputs {...props} />;

    case "password":
      return <Inputs {...props} />;
  }
};
