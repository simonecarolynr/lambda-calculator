import React,{useState} from "react";
import { SpecialButton } from "./SpecialButton.js";
import { specials } from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div className="SpecialsContainer">
      {specialsState.map( specialCharacters => {
        return <SpecialButton value={specialCharacters}/>
      })
      }
    </div>
  );
};
