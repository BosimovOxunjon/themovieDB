import React, {useState} from "react";
import RingLoader from "react-spinners/RingLoader";
import { StyledSpinner } from "./layout/styleSpinner";

const Spinner = () => {
  return (
    <StyledSpinner>
      <RingLoader className="loader" color="red" size={180} />
    </StyledSpinner>
  );
  //   }
};

export default Spinner;
