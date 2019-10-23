import React from "react";
import { operators } from "../../data.js";

export const OperatorButton = ({operators}) => {
  return (
    <div>
      {<button value={operators.value}>{operators.char}</button>}
    </div>
  );
};