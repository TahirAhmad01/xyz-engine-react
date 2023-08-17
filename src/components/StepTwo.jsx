import React from "react";
import StepInputTxt from "./StepInputTxt";

function StepTwo({ handleStep }) {
  function backStep() {
    handleStep(false);
  }

  return (
    <div className="w-[600px] bg-red-200 rounded-lg">
      <div className="p-3 w-full bg-blue-600 text-white">Step 2</div>
      <div className="bg-white p-3 ">
        <StepInputTxt />
        <StepInputTxt />
        <StepInputTxt />
        <StepInputTxt />
        <div className="pt-5 text-end">
          <button className="py-3 px-9 rounded-md border" onClick={backStep}>
            Back
          </button>
          <button className="py-3 px-9 rounded-md border">Submit</button>
        </div>{" "}
      </div>
    </div>
  );
}

export default StepTwo;
