import React, { useEffect, useState } from "react";
import StepInputTxt from "./StepInputTxt";
import FileDragDrop from "./fileDragDrop";
import StepCardLayout from "./StepCardLayout";

function StepTwo({ handleStep, stepData, update, setStepData }) {
  const [outPutVal, setOutputVal] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);

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

          console.log(coordinates.filter((item) => item === !isNaN(item)));

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

  return (
    <StepCardLayout title="Step 2">
      
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
          />
          <StepInputTxt
            name="min_x"
            inpName="Min X"
            value={stepData.min_x}
            onChange={update}
          />
          <StepInputTxt
            name="max_y"
            inpName="Max Y"
            value={stepData.max_y}
            onChange={update}
          />
          <StepInputTxt
            name="min_y"
            inpName="Min Y"
            value={stepData.min_y}
            onChange={update}
          />
          <StepInputTxt
            name="max_z"
            inpName="Max Z"
            value={stepData.max_z}
            onChange={update}
          />
          <StepInputTxt
            name="min_z"
            inpName="Max Z"
            value={stepData.min_z}
            onChange={update}
          />
        </div>
        <div className="pt-5 text-end">
          <button className="py-3 px-9 rounded-md border" onClick={backStep}>
            Back
          </button>
          <button className="py-3 px-9 rounded-md border">Submit</button>
        </div>{" "}
    </StepCardLayout>
  );
}

export default StepTwo;
