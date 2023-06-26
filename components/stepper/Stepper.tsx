import React, { useState } from "react";
import Step from "./Step";

const Stepper = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (increment:boolean) : void=>{
increment ?    setValue(value + 1)  : setValue(value - 1);
  }
  return <>
   <div className="flex items-center relativew-[60%]">
    <Step activeValue={0} number={1} text="Prepare" value={value}  />
    <Step activeValue={3} number={2} text="Transfer" value={value}  />
    <Step activeValue={5} number={3} text="Book" value={value}  />
  </div>
  <button disabled={value ===0} onClick={()=>handleChange(false)}>&larr; Prev </button>
  <button disabled={value ===5} onClick={()=>handleChange(true)}> Next &rarr;</button>
  </>
};

export default Stepper;
