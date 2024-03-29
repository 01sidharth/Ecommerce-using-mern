import React, { useState } from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  const[state,setState]=useState("Sign Up");
  const[formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })
  const Changehandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login =async()=>{
    console.log("login function executed",formData);
    let responseData;
    await fetch(`${process.env.REACT_APP_MAIN_URL}login`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
    

  }
  const signup =async()=>{
    console.log("signup function executed",formData);
    let responseData;
    await fetch(`${process.env.REACT_APP_MAIN_URL}signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
    
  }
  return (
    <div className='loginsignup'>
      <div className="loginsigup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up"?<input name='username' value={formData.username} onChange={Changehandler}type="text" placeholder='Your Name' />:<></>} 
          <input name='email' value={formData.email} onChange={Changehandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={Changehandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"? <p className="loginsignup-login">Already have an Account <span onClick={()=>{setState("Login")}}>Login here</span></p>: <p className="loginsignup-login">Create an Account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup