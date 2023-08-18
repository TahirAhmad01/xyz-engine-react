import Navbar from "./components/Navbar";
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import stepDataObj from "./utils/stepDataObj";
import Result from "./components/Result";

function App() {
  const [stepOneComplete, setStepOneComplete] = useState(false);
  const [stepData, setStepData] = useState(stepDataObj);
  const [stepCompleted, setStepCompleted] = useState(false);
  let content;

  // console.log(stepData);

  const updateInp = (e) => {
    const { value, name } = e.target;
    console.log(name);

    setStepData({
      ...stepData,
      [name]: value,
    });
  };

  if (!stepOneComplete && !stepCompleted) {
    content = (
      <StepOne
        handleStep={setStepOneComplete}
        stepData={stepData}
        update={updateInp}
      />
    );
  } else if (stepOneComplete && !stepCompleted) {
    content = (
      <StepTwo
        handleStep={setStepOneComplete}
        stepData={stepData}
        update={updateInp}
        setStepData={setStepData}
        setStepCompleted={setStepCompleted}
      />
    );
  } else if (stepOneComplete && stepCompleted) {
    content = <Result stepData={stepData} />;
  } else {
    content = <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="p-5 min-h-screen bg-gray-100">
        <Navbar />
        <div className="h-screen flex justify-center items-center">
          {content}
        </div>
      </div>
    </>
  );
}

export default App;
