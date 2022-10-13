import React from 'react';
import {UseUserContext} from "../usecontext/Context";
import Form from './Form';

const Header = () => {
  const {userInfo, logOut} = UseUserContext();
  console.log(userInfo)

  return (
    <div>
      <h1>React Context Api</h1>
      <h3>Welcome {userInfo.name}</h3>
      {!userInfo.isGuestUser && <button onClick={logOut}>LogOut</button>}
     <Form />
    </div>
  );
}

export default Header;