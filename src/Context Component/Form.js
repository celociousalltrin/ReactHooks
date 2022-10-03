import React from 'react';
import { useState } from 'react';
import { UseUserContext } from '../usecontext/Context';

const Form = () => {
    const [person, setPerson] = useState({
        email:"",
        password:"",
    })

    const handleChange = ((e)=>{
    setPerson((prev)=>({...prev, [e.target.name]:e.target.value}))
    })

    const {logIn} = UseUserContext();

    const handleClick = (()=>{
      logIn(person.email)
         console.log(person)
    })

  return (
    <div>
      <h1>Registration Form</h1>
      <input
        type="text"
        placeholder="name..."
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password..."
        name="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default Form;