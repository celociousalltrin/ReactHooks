import React from 'react';
import Home from './Home';
import Form from './Form';
import { UseUserContext } from '../usecontext/Context'; 

const Auth = () => {
    const {userInfo} = UseUserContext()

  return (
    <div>
{userInfo.isGuestUser ? <Form /> : <Home />}
    </div>
  )
}

export default Auth