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
      <div className="flex flex-col gap-3">
        <StepOne
          handleStep={setStepOneComplete}
          stepData={stepData}
          update={updateInp}
          stepOneComplete={stepOneComplete}
        />
        <StepTwo
          handleStep={setStepOneComplete}
          stepData={stepData}
          update={updateInp}
          setStepData={setStepData}
          setStepCompleted={setStepCompleted}
        />
      </div>
    );
  } else if (stepOneComplete && stepCompleted) {
    content = <Result stepData={stepData} />;
  } else {
    content = <div>Something went wrong</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-5 min-h-[calc(100vh-5rem)] mt-3 md:flex md:justify-center md:items-center overflow-hidden">
        {content}
      </div>
    </div>
  );
}

export default App;
