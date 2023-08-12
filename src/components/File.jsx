import { ErrorMessage } from "formik";
import React from "react";

export const File = (props) => {
  const { formik, type, name, placeholder, inputStyle, errMsg } = props;
  const handleSetFieldValue = (e) => {
    formik.setFieldValue(name, e.target.files[0]);
  };
  return (
    <div className=" col-12">
      <label htmlFor=""></label>
      <div className="position-relative">
        <input
          value={formik.values[name] ? formik.values[name].name : ""}
          onChange={() => {}}
          type="text"
          placeholder={placeholder}
          className={` input-group-text rounded-pill shadow-lg ${inputStyle} w-100`}
        />
        <input
          type={type}
          name={name}
          className={`chooseFile pointer input-group-text rounded-pill shadow-lg ${inputStyle} w-100`}
          onChange={(e) => handleSetFieldValue(e)}
        />
      </div>
      <div className={`${errMsg}`}>
        <ErrorMessage
          name={name}
          render={(d) => <small className="smallFont">{d}</small>}
        />
      </div>
    </div>
  );
};
