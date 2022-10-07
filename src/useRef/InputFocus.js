import React from "react";
import { useState, useRef, useEffect } from "react";

const InputFocus = () => {
  const [user, setUser] = useState("");
  const [counter, setCounter] = useState(0)
  const inputEl = useRef("");
  const previousCounterRef = useRef("")

  const handleReset = () => {
    setUser("");
    inputEl.current.focus();
  };

  useEffect(()=>{
       previousCounterRef.current = counter;
  },[counter]) 

  return (
    <div>
      <h1>This is useRef example</h1>
      <input
        ref={inputEl}
        type="text"
        placeholder="firstName.."
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <h1>My name is {user} </h1>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h1>random counter : {counter}</h1>
        {typeof previousCounterRef.current !== "undefined" && (
            <h2>Previous Counter : {previousCounterRef.current}</h2>
        )}
        <button onClick={()=>setCounter(Math.ceil(Math.random()*100))}>Click to generate random number</button>
      </div>
    </div>
  );
};

export default InputFocus;
