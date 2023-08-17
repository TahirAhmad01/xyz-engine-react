import React from "react";
import StepInputTxt from "./StepInputTxt";
import StepBtn from "./stepBtn";
import StepCardLayout from "./StepCardLayout";

function StepOne({ handleStep, stepData, update }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStep(true);
  };

  return (
    <StepCardLayout title="Step 1">
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
    </StepCardLayout>
  );
}

export default StepOne;
