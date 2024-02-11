import React, { useContext, useState } from "react";
import'./SignIn.css'
import { AuthContext } from "../AuthContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function SignIn(){
  const [userData,setUserData] = useState({email:"",password:""})

  const {Login} = useContext(AuthContext)

  const router = useNavigate()

  const handleChange = (event)=>{
      setUserData({...userData,[event.target.name]:event.target.value})
  }

  const handleSubmit =async (event)=>{
      event.preventDefault()
      if(userData.email && userData.password){
          try {
              const response = await axios.post("http://localhost:8000/api/v1/auth/login",{userData})
              if(response.data.success){
                  // console.log(response.data)
                  localStorage.setItem("my-token",response.data.token)
                  Login(response.data.user)
                  
                  setUserData({email:"",password:""})
                   router('/')
              }
          } catch (error) {
              console.log(error,"something went wrong")
          }
      }
  }
    return(
        <div className="container-m">
            <div className="main">
                <div className="main-head">
                    <h1>Sign in</h1>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                </div>
                <form onSubmit={handleSubmit} >
                    <label className="lab-1">Email <span>*</span></label><br />
                  <input className="email" type="email" required onChange={handleChange} name="email"/> <br /> 
                  <label className="lab-2">Password <span>*</span></label><br />
                  <input className="password" type="password"  onChange={handleChange} name="password"/> <br />
                  <div className="check">
                    <div className="check-l">
                        <input type="checkbox" />
                        <span>remember me</span>
                    </div>
                    <a href="#">forgot password?</a>
                    
                  </div>
                  <button className="bt-si" type="submit">sign in</button>
                  
                </form>
                
                <button className="be-me" onClick={()=>router('/register')}>Become a member</button>
                  <span>
                    <a href="#">Membership info</a>
                  </span>
                


            </div>

        </div>
    )
}

export default SignIn;