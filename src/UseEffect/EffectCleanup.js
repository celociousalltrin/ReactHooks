import React, { Children } from "react";
import { useState, useEffect } from "react";

const EffectCleanup = () => {
  const [toggle, setToggle] = useState(false);
  
  useEffect(()=>{
console.log("UseEffect runs")
//return a cleanup function
return ()=>{
    console.log("It clean the Effect before running")
}
  }, [toggle])

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default EffectCleanup;
