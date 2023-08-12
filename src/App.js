import React, { useState } from "react";
import './App.css';

function App() {
  // define varible using useState hook
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  // function to handle operator..
  function handleOperator(selectedOperator) { 
    setOperator(selectedOperator);
    setErrorMessage("");
    setSuccessMessage("");
    setCurrentInput(`${num1} ${selectedOperator} ${num2}`);
  }


  // function to validate input
  function validateInput(){
    setErrorMessage("");
    setSuccessMessage("");

    if(num1 === "" || num2 === ""){
      setErrorMessage("both number are required")
      return false;
    }
    if( isNaN(num1) || isNaN(num2)){
      setErrorMessage("enter valid number");
      return false;
    }
    return true
  }
  
  // function to calculate input 
    function handleCalculate(){
       
      if(validateInput()){
        let resultValue ="";

         try{
             resultValue = eval(`${num1} ${operator} ${num2}`)
         }catch(error){
          setErrorMessage("error during calculation")
          return
         }
         setResult(resultValue);
         setSuccessMessage("calculation successful")
      }
    }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="container" >
        <input type="text" placeholder="Num 1" 
           onChange={(e)=> setNum1(e.target.value)}   
        />
         <input type="text" placeholder="Num 2" 
           onChange={(e)=> setNum2(e.target.value)}   
        />
          <input type="text" value={currentInput} readOnly />
          <div className="btns">
         <button onClick={() => handleOperator("+")}>+</button>
         <button onClick={() => handleOperator("-")}>-</button>
         <button onClick={() => handleOperator("*")}>*</button>
         <button onClick={() => handleOperator("/")}>/</button>
         </div>
         <button onClick={handleCalculate} className="calculate">=</button>

         {errorMessage && <p className="error">{errorMessage}</p>}
         {successMessage && <p className="success">{successMessage}</p>}
         {result !== "" && <h1 className="result">Result: {result}</h1>}

         </div>
       
    </div>
  );
  }


export default App;
