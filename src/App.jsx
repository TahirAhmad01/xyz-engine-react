import Navbar from "./components/Navbar";
import { useState } from "react";
import StepOne from "./components/stepOne";
import StepTwo from "./components/StepTwo";
import stepDataObj from "./utils/stepDataObj";

function App() {
  const [stepOneComplete, setStepOneComplete] = useState(true);
  const [stepData, setStepData] = useState(stepDataObj);

  console.log(stepData);

  const updateInp = (e) => {
    const { value, name } = e.target;
    console.log(name);

    setStepData({
      ...stepData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="p-5 min-h-screen bg-gray-100">
        <Navbar />
        <div className="h-screen flex justify-center items-center">
          {!stepOneComplete ? (
            <StepOne
              handleStep={setStepOneComplete}
              stepData={stepData}
              update={updateInp}
            />
          ) : (
            <StepTwo
              handleStep={setStepOneComplete}
              stepData={stepData}
              update={updateInp}
              setStepData={setStepData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
