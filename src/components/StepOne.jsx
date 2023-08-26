import React from "react";
import StepInputTxt from "./StepInputTxt";
import StepBtn from "./StepBtn";
import StepCardLayout from "./StepCardLayout";

function StepOne({ handleStep, stepData, update, stepOneComplete }) {
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
            placeholder="Example Project"
            value={stepData.projectName}
            onChange={update}
            disabled={stepOneComplete}
            className={stepOneComplete && "text-gray-500"}
          />
          <StepInputTxt
            name="projectDes"
            inpName="Project Description"
            placeholder="This is an gas station data ....."
            value={stepData.projectDes}
            onChange={update}
            disabled={stepOneComplete}
            className={stepOneComplete && "text-gray-500"}
          />
          <StepInputTxt
            name="client"
            inpName="Client"
            placeholder="Mr. Alex"
            value={stepData.client}
            onChange={update}
            disabled={stepOneComplete}
            className={stepOneComplete && "text-gray-500"}
          />
          <StepInputTxt
            name="contractor"
            inpName="Contractor"
            placeholder="Example inc. ltd."
            value={stepData.contractor}
            onChange={update}
            disabled={stepOneComplete}
            className={stepOneComplete && "text-gray-500"}
          />
          {!stepOneComplete && (
            <div className="pt-5 text-end">
              <StepBtn name="Next" />
            </div>
          )}
        </div>
      </form>
    </StepCardLayout>
  );
}

export default StepOne;
