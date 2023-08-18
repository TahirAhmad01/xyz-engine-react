import React, { useEffect, useState } from "react";
import StepInputTxt from "./StepInputTxt";
import FileDragDrop from "./FileDragDrop";
import StepCardLayout from "./StepCardLayout";
import StepBtn from "./StepBtn";

function StepTwo({
  handleStep,
  stepData,
  update,
  setStepData,
  setStepCompleted,
}) {
  const [outPutVal, setOutputVal] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const filterArr = outPutVal.filter((subArray) => subArray.length > 2);
    {
      fileUploaded &&
        (() => {
          const coordinates = filterArr.slice(1).map((item) => {
            return {
              x: parseFloat(item[1]),
              y: parseFloat(item[2]),
              z: parseFloat(item[3]),
            };
          });

          // console.log(coordinates.filter((item) => item === !isNaN(item)));

          const maxX = Math.max(...coordinates.map((coord) => coord.x));
          const minX = Math.min(...coordinates.map((coord) => coord.x));
          const maxY = Math.max(...coordinates.map((coord) => coord.y));
          const minY = Math.min(...coordinates.map((coord) => coord.y));
          const maxZ = Math.max(...coordinates.map((coord) => coord.z));
          const minZ = Math.min(...coordinates.map((coord) => coord.z));

          setStepData({
            ...stepData,
            max_x: maxX,
            min_x: minX,
            max_y: maxY,
            min_y: minY,
            max_z: maxZ,
            min_z: minZ,
          });

          return { maxX, minX, maxY, minY, maxZ, minZ };
        })();
    }
  }, [outPutVal]);

  function backStep() {
    handleStep(false);
  }

  function handleStepTwo(e) {
    // handleStep(true);
    e.preventDefault();

    if (Number(stepData.max_x) < Number(stepData.min_x)) {
      setError("Min X values are grater than Max X values");
    } else if (Number(stepData.max_y) < Number(stepData.min_y)) {
      setError("Min Y values are grater than Max Y values");
    } else if (Number(stepData.max_z) < Number(stepData.min_z)) {
      setError("Min Z values are grater than Max Z values");
    } else {
      setError("");
      setStepCompleted(true);
    }
  }

  return (
    <StepCardLayout title="Step 2">
      <form onSubmit={handleStepTwo}>
        <FileDragDrop
          setOutputVal={setOutputVal}
          setFileUploaded={setFileUploaded}
        />
        <div className="grid grid-cols-2 gap-3">
          <StepInputTxt
            name="max_x"
            inpName="max X"
            value={stepData.max_x}
            onChange={update}
            type="number"
          />
          <StepInputTxt
            name="min_x"
            inpName="Min X"
            value={stepData.min_x}
            onChange={update}
            type="number"
          />
          <StepInputTxt
            name="max_y"
            inpName="Max Y"
            value={stepData.max_y}
            onChange={update}
            type="number"
          />
          <StepInputTxt
            name="min_y"
            inpName="Min Y"
            value={stepData.min_y}
            onChange={update}
            type="number"
          />
          <StepInputTxt
            name="max_z"
            inpName="Max Z"
            value={stepData.max_z}
            onChange={update}
            type="number"
          />
          <StepInputTxt
            name="min_z"
            inpName="Min Z"
            value={stepData.min_z}
            onChange={update}
            type="number"
          />
        </div>
        {error !== "" && (
          <div className="text-red-500 text-center py-2 font-semibold">{error}</div>
        )}
        <div className="pt-5 text-end">
          <StepBtn name="Back" onClick={backStep} />
          <StepBtn name="Submit" />
        </div>{" "}
      </form>
    </StepCardLayout>
  );
}

export default StepTwo;
