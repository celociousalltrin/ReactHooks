import React from "react";
import { useState, useEffect } from "react";

  const EffectHook = () => {
  const [count, setCount] = useState(0);

    useEffect(()=>{
        console.count("UseEffect Runs")
      document.title = `You clicked ${count} times`
    })
    
  console.count("Component Rendered");
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default EffectHook;
