import { ErrorMessage, FastField } from "formik";
import React from "react";

const Inputs = (props) => {
  const { type, name, placeholder, iconStyle } = props;
  return (
    <div>
      <label htmlFor=""></label>
      <FastField
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${iconStyle} input-group-text rounded-pill shadow-lg`}
      />
      <ErrorMessage name={name} render={(d)=><small className="smallFont">{d}</small>}/>
    </div>
  );
};

export default Inputs;
