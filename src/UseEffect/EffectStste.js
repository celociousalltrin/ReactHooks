import React from "react";
import { useState, useEffect } from "react";

const EffectState = () => {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log("Effect Runs");
  //   const interval = setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <h1>Time : {number}Sec</h1>
    </div>
  );
};

export default EffectState;
