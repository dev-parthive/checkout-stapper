import { useState } from "react";
import "../App.css";
const stepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const ActiveComponent = stepsConfig[currentStep - 1]?.component;
  const handleBtn = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };
  if (!stepsConfig.length) {
    return <></>;
  }
  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
            >
              <p className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </p>
              <p className="step-name">{step?.name}</p>
            </div>
          );
        })}

        {/* progress bar  */}
        <div className="progressbar">
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent className="activeCompo"></ActiveComponent>

      <button className="btn" onClick={handleBtn}>
        {currentStep > stepsConfig.length - 1 || isComplete ? "Finish" : "Next"}
      </button>
    </>
  );
};

export default stepper;
