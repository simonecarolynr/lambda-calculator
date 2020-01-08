import React from "react";
import Numbers from "./Numbers"

export const NumberButton = (numbers) => {
  console.log(numbers)
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className="numbers">{numbers.value}</button>
      </>
    );
  };
