import React from "react";
import { LoginInputs } from "./LoginInputs";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Form() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center ">
      <div className="p-2">
        <div className="customForm d-flex flex-column justify-content-center align-items-center ">
          <LoginInputs />
        </div>
        <div className=" mt-1 customRegisterLink ">
          <div className=" h-100 d-flex justify-content-center align-items-center fs-4">
            <AiOutlineArrowLeft /> Register
          </div>
        </div>
      </div>
    </div>
  );
}
