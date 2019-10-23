import React from "react";
import { numbers } from '../../data.js';

export const NumberButton = ({numbers}) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numbers}</button>
    </>
  );
};

