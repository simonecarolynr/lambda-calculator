import React from "react";

export const OperatorButton = (operators) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  <button>{operators.value}</button>
    </>
  );
};