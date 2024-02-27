import { useRef, useState, useEffect } from "react";
import "../App.css";
const stepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepREf = useRef([]);
  useEffect(() => {
    setMargins({
      marginLeft: stepREf.current[0].offsetWidth / 2,
      marginRight: stepREf.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepREf, stepREf.current]);

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
              ref={(el) => {
                stepREf.current[index] = el;
                console.log(stepREf.current);
                return el;
              }}
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
        <div
          className="progressbar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
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
