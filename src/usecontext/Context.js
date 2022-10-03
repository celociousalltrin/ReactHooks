import {createContext, useContext, useState} from "react";

export const UserContext = createContext({
  userInfo: null,
  logIn: () => {},
  logOut: () => {},
});

const USERINFO = { name: "Guest", isGuestUser: true };



export const UserContextProvider = (({children})=>{

    const [userInfo, setUserInfo] = useState(USERINFO)

    function logIn(username){
            setUserInfo({isGuestUser: false, name: username})
    }

    function logOut(){ 
        setUserInfo(USERINFO)
    }

    return (
        <UserContext.Provider value={{userInfo, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
})



export const UseUserContext = (()=>{
    const {userInfo, logIn, logOut} = useContext(UserContext);


    return {userInfo, logIn, logOut};
})
