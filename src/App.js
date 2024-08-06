import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setstep] = useState(0);
  const [isopen, setisopen] = useState(true);

  function handleNext() {
    if (step < 2) setstep(step + 1);
  }
  function handlePrevious() {
    if (step + 1 > 1) setstep(step - 1);
  }
  function handleisopen(k) {
    setisopen((k) => !isopen);
  }
  return (
    <div>
      <button className="close" onClick={handleisopen}>
        {" "}
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            {/* شرط برای رنگی شدن خونه ها در مرحله ای که توش هستیم */}
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Steps {step + 1}:{messages[step]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
