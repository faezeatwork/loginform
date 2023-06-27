import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RegisterInputs } from "./RegisterInputs";

export const Register = () => {
  return(
    <div className="p-2">
    <div className="customForm d-flex flex-column justify-content-center align-items-center ">
     <RegisterInputs/>
    </div>
    <div className=" mt-1 customRegisterLink ">
      <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
        <AiOutlineArrowLeft /> Login
      </div>
    </div>
  </div>
  );
};
