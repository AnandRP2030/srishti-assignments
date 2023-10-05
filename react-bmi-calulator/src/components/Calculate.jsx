import { useState } from "react";
const Calculate = () => {
  const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");

  const [kgUnit, setKgUnit] = useState(true);
  const [meterUnit, setMeterUnit] = useState(true);

  const handleHeightUnitChange = (e) => {
    let newHeightUnit = e.target.value;
    if (newHeightUnit === "feet") {
      setMeterUnit(false);
      return;
    }
    setMeterUnit(true);
    return;
  };

  const handleKgUnitChange = (e) => {
    let newKgUnit = e.target.value;
    if (newKgUnit === "pound") {
      setKgUnit(false);
      return;
    }
    setKgUnit(true);
    return;
  };
  const handleCalculate = () => {
    if (weight === "" || height === "") {
      alert("Enter values for find your BMI");
      return;
    }
    let newHeight = height;
    let newWeight = weight;

    // converting units.
    if (!kgUnit) {
      newWeight = (newWeight * 0.453592).toFixed(2);
    }

    if (!meterUnit) {
      newHeight = (newHeight * 0.3048).toFixed(2);
      if (inches !== "") {
        let newInches = (parseFloat(inches) * 0.0254).toFixed(2);
        newInches = parseFloat(newInches);
        newHeight = parseFloat(newHeight);
        newHeight += newInches;
      }
    }

    let newBmi = (newWeight / (newHeight * newHeight)).toFixed(1);
    setBmi(newBmi);
  };

  const handleClear = () => {
    setBmi("");
    setWeight("");
    setHeight("");
    setInches("");
  };

  return (
    <div className="calculate-box">
      <div className="age-category">
        <p>Calculate BMI for </p>
        <select className="select-age" name="activePerson" id="">
          <option value="adult">Adult Age 20+</option>
        </select>
      </div>

      <div className="user-inputs">
        <div>
          <p>Weight</p>
          <input
            type="number"
            placeholder=""
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <select
            name="weight-unit"
            id="weight-unit"
            onChange={handleKgUnitChange}
          >
            <option value="kg">KG</option>
            <option value="pound">Pound</option>
          </select>
        </div>
        <div>
          <p>Height</p>
          <input
            type="number"
            placeholder=""
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <select
            name="height-unit"
            id="height-unit"
            onChange={handleHeightUnitChange}
          >
            <option value="meter">Meter</option>
            <option value="feet">Feet</option>
          </select>
        </div>
        {!meterUnit && (
          <div className="bottom-row">
            <input
              type="number"
              placeholder=""
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
            <p>Inches</p>
          </div>
        )}
      </div>

      <div className="btn-box">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      <div className="ans-box">
        <p>Answer:</p>
        <p className="bmi">BMI = {bmi}</p>
      </div>
    </div>
  );
};
export default Calculate;
