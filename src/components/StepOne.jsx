import React from "react";
import StepInputTxt from "./StepInputTxt";
import StepBtn from "./stepBtn";

function StepOne({ handleStep, stepData, update }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStep(true);
  };

  return (
    <div className="w-[600px] bg-red-200 rounded-lg overflow-hidden shadow-md">
      <div className="p-3 w-full bg-blue-600 text-white">Step 1</div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-3 ">
          <StepInputTxt
            name="projectName"
            inpName="Project Name"
            value={stepData.projectName}
            onChange={update}
          />
          <StepInputTxt
            name="projectDes"
            inpName="Project Description"
            value={stepData.projectDes}
            onChange={update}
          />
          <StepInputTxt
            name="client"
            inpName="client"
            value={stepData.client}
            onChange={update}
          />
          <StepInputTxt
            name="contractor"
            inpName="Contractor"
            value={stepData.contractor}
            onChange={update}
          />
          <div className="pt-5 text-end">
            <StepBtn name="Next" />
          </div>{" "}
        </div>
      </form>
    </div>
  );
}

export default StepOne;
