import React,{useState} from "react";
import { SpecialButton } from "./SpecialButtons.js";
import { specials } from "../../data.js";
//import any components needed

//Import your array data to from the provided data file

export const Specials = (props) => {
  const [specialsState, setSpecialsState] = useState(specials);  
  return (
    <div>
      {specialsState.map( specialCharacters => {
         return(
           <SpecialsButton 
             specialCharacters={specialCharacters}
           />
         );
       })}

    </div>
  );
};
