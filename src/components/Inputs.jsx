import { ErrorMessage, FastField } from "formik";
import React from "react";

const Inputs = (props) => {
  const { type, name, placeholder, iconStyle , inputStyle } = props;
  return (
    <div className="">
      <label htmlFor=""></label>
      <FastField
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${iconStyle} input-group-text rounded-pill shadow-lg m-0 ${inputStyle}`}
      />
      <ErrorMessage name={name} render={(d)=><small className="smallFont">{d}</small>}/>
    </div>
  );
};

export default Inputs;
