
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'


const Register = () => {
    const [userData,setUserData] = useState({name:"",email:"",password:""})

    const router = useNavigate()

    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSubmit =async (event)=>{
        event.preventDefault()
        if(userData.email && userData.password && userData.name){
            try {
                const response = await axios.post("http://localhost:8000/api/v1/auth/register",{userData})
                if(response.data.success){
                    console.log("registration successfull",response.data)
                    
                    setUserData({name:"",email:"",password:""})
                     router('/signin')
                }
            } catch (error) {
                console.log(error,"something went wrong")
            }
        }
    }
  return (
    <div className='w-1/2 h-80 mx-auto my-40 border'>
    <h1 className='my-10 text-2xl font-medium'>Log in or sign up</h1>
    <form  onSubmit={handleSubmit}>
         <input type="text"  name='name' className='border pl-14 w-2/3 h-10 mb-5 mx-auto rounded-xl' onChange={handleChange} placeholder='enter your name'/>
         <input className='border pl-14 w-2/3 h-10 mb-5 mx-auto rounded-xl' type="email" name="email" placeholder='enter your email' onChange={handleChange}/>
         <input className='border pl-14  w-2/3 h-10 mx-auto rounded-xl'  type="password" placeholder='enter your password' name='password' onChange={handleChange}/>
         <button className='mt-5 border w-2/3 h-8 mx-auto rounded-xl bg-red-500 cursor-pointer' type='submit'>Register</button>
         
    </form>
</div>
  )
}

export default Register