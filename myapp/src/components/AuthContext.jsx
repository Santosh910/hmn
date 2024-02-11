
import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';


export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state,user:action.payload}
        case "LOGOUT":
            return { ...state, user:null }
        
        default:
            return state;
    }
}

const ParentAuthContext = ({children}) => {
    const initialState = {user:null}
    const[state,dispatch] = useReducer(reducer,initialState)

    const Login = (data) => { 
        dispatch({type:"LOGIN",payload:data})
    }
    const Logout = () => {
        localStorage.removeItem("my-token")
        dispatch({type:"LOGOUT"})
        console.log("logout successfull...")
    }

 
    
useEffect(()=>{
    
    async function getCurrentUser(){
        try{
            const response = await axios.post("http://localhost:8000/api/v1/auth/get-user",{token})
             if(response.data.success){
                console.log(response.data.user,"response.data.user")
                Login(response.data.user)
             }
        }catch(error){
            console.log(error,"user not found")
        }
        
    }
    const token = localStorage.getItem("my-token")
    if(token){
        getCurrentUser()
    }
},[])


    return (
        <AuthContext.Provider  value={{ state,Login,Logout }}>
            {children}
        </AuthContext.Provider>
    )
 }

export default ParentAuthContext
