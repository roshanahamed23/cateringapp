import React from 'react'
import { createContext,useState } from 'react'
export const Mycontext=createContext();

const Myprovider = ({children}) => {
 const [userData,setUserData]=useState({name:"",email:"",phone:"",service:"",details:""});
  return (
    <Mycontext.Provider value={{userData,setUserData}}>
        {children}
    </Mycontext.Provider>
  )
}

export default Myprovider;