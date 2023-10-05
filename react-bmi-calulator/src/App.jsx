import "./App.css";
import Calculate from "./components/Calculate";
import BmiStatus from "./components/BmiStatus";

function App() {
  return (
    <div className="container-box">
      <div className="heading">
        <p>Adult and Child BMI Calculator</p>
      </div>

      <Calculate />
      <BmiStatus />
    </div>
  );
}

export default App;
