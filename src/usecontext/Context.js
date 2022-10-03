import {createContext, useContext, useState} from "react";

export const UserContext = createContext({
  userInfo: null,
  logIn: () => {},
  logOut: () => {},
  theme: null,
  toogleTheme: () =>{},
});

const USERINFO = { name: "Guest", isGuestUser: true };



export const UserContextProvider = (({children})=>{

    const [userInfo, setUserInfo] = useState(USERINFO)
    const [theme, setTheme] = useState("light")

    function logIn(username){
            setUserInfo({isGuestUser: false, name: username})
    }

    function logOut(){ 
        setUserInfo(USERINFO)
    }

    const toogleTheme = (()=>{
        setTheme((curr)=>curr === "light" ? "dark" :"light")
    })

    return (
        <UserContext.Provider value={{userInfo, logIn, logOut, theme, toogleTheme}}>
            {children}
        </UserContext.Provider>
    )
})



export const UseUserContext = (()=>{
    const {userInfo, logIn, logOut, theme, toogleTheme} = useContext(UserContext);


    return {userInfo, logIn, logOut, theme, toogleTheme} ;
})
