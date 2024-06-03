import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errormessage, setErrorMessage] = useState("");

const calculateBmi = () => {
  const isValidHeight=/^\d+$/.test(height);
  const isValidWeight=/^\d+$/.test(weight);
  if (isValidHeight &&isValidWeight) {
    const heightinm = height / 100 ;
    const bmivalue = weight / (heightinm * heightinm);
    setBmi(bmivalue.toFixed(2));
    if (bmivalue < 18.5){
      setBmiStatus("Underweight");
    }
    else if (bmivalue >= 18.5 && bmivalue < 24.9){
      setBmiStatus("Normal Weight");
    }
    else if (bmivalue >= 25 && bmivalue < 29.9){
      setBmiStatus("Overweight");
    }
    else{
      setBmiStatus("Obese");
    }
    setErrorMessage("");
  }
  else{
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("Please enter valid numeric values for height and weight");
  }
};

const clearAll = () => {
  setHeight("");
  setWeight("");
  setBmi(null);
  setBmiStatus("");
  
};

  return (
    <>
      <div className="bmi">
      <div className="box">
      <div className="data">
      <h1>BMI Calculator</h1>
      {errormessage && <p className="error">{errormessage}</p>}
      <div className="input">
      <label htmlFor='height'>Height (cm):</label>
      <input type="text" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="input">
      <label htmlFor='wight'>Weight (Kg):</label>
      <input type="text" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      <button onClick={clearAll}>Clear</button>
      {bmi !== null && (
        <div className="result">
        <p>your BMI is :{bmi}</p>
        <p>Status: {bmiStatus}</p>
        </div>
      )}
      </div>
      </div>
      </div>

       
    </>
  )
}

export default App
