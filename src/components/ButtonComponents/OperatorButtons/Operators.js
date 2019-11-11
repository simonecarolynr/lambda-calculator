import React,{useState} from "react";
import { OperatorButton } from "./OperatorButton.js";
import { operators } from "../../../data";

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperators] = useState(operators);
  return (
    <div className="OperatorsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsState.map(operators => {
        return <OperatorButton value={operators.value}/>
       })}
    </div>
  );
};

  
 



