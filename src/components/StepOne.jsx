import React from "react";
import StepInputTxt from "./StepInputTxt";

function StepOne({ handleStep, stepData, setStepData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStep(true);
  };

  const update = (e) => {
    const { value, name } = e.target;
    console.log(name);

    setStepData({
      ...stepData,
      [name]: value,
    });
  };


  return (
    <div className="w-[600px] bg-red-200 rounded-lg overflow-hidden shadow-md">
      <div className="p-3 w-full bg-blue-600 text-white">Step 1</div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-3 ">
          <StepInputTxt
            name="projectName"
            valName="Project Name"
            value={stepData.projectName}
            onChange={update}
          />
          <StepInputTxt
            name="projectDes"
            valName="Project Description"
            value={stepData.projectDes}
            onChange={update}
          />
          <StepInputTxt
            name="client"
            valName="client"
            value={stepData.client}
            onChange={update}
          />
          <StepInputTxt
            name="contractor"
            valName="Contractor"
            value={stepData.contractor}
            onChange={update}
          />
          <div className="pt-5 text-end">
            <button className="py-3 px-9 rounded-md border">Next</button>
          </div>{" "}
        </div>
      </form>
    </div>
  );
}

export default StepOne;
