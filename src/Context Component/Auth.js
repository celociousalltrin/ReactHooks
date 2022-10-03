import React from 'react';
import Home from './Home';
import Form from './Form';
import { UseUserContext } from '../usecontext/Context'; 
import "./Auth.css";

const Auth = () => {
    const {userInfo, theme, toogleTheme} = UseUserContext()

  return (
    <div id={theme}>
{userInfo.isGuestUser ? <Form /> : <Home />}
<button onClick={toogleTheme}>Click to change color</button>
    </div>
  )
}

export default Auth;