import React, { createContext, useState } from "react";

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
const [isAuth,setIsAuth]=useState({
  isAuth:false,
  token:null
})
const [IsLoginPage,setIsLoginPage]=useState(false)
const handleLog=({isAuth,token})=>{
  // console.log(isAuth,token)

  if(token){
    setIsAuth({
      isAuth:true,
      token:token
    })
  }
}

  return <AuthContext.Provider value={{isAuth,handleLog,setIsLoginPage,IsLoginPage}} >
    {children}
  </AuthContext.Provider>
};

export default AuthContextProvider;
