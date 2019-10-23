import React,{useState} from "react";
import { OperatorButtons } from "./OperatorButtons.js";
import { operators } from "../../data.js";
//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperators] = useState(operators);
  let mapKey = 0;
  return (
    <div>
      {operatorsState.map(operators => {
        console.log(operators)
        return(
          <OperatorButton key={mapKey++} operators={operators} />
        )
      })}
    </div>
  )
}
