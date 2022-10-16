import React, { useState } from 'react'
import {AiFillEyeInvisible , AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {OAutho} from '../components/OAuth'


export default function Signup() {
  const [showPassword ,setShowpassword] = useState(false)
  const [formData ,setFormData] = useState({
    name:"",
    email:"",
    password: ""
  })
  const {name, email , password} = formData
  function onChange(e){
   console.log(e.target.value)
   setFormData((prevState)=>({
    ...prevState,
    [e.target.id]: e.target.value
   }))
  }
  return (
   <section >
 <h1 className="text-3xl text-center mt-6 font-bold " >Sign Up</h1>
<div className="flex flex-wrap mb-8">
  <div className="md:w-[67%]  lg:w-[50%] mb-12 md:mb-6">
    <img className="  w-50% rounded-lg"  src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000" alt="" />
  </div>
  <div className="w-full md:w-[67%] ml-4 mr-4 lg:w-[40%] lg:mt-10" >
  <form >
    <div>
    <input className="border-2 transition duration-500 placeholder-blue-200 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p mb-4" type="text" id='name' value={name}onChange={onChange} placeholder="name"/>
    </div>
    <div>
    <input className="border-2 transition duration-500 placeholder-blue-200 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p" type="email" id='email' value={email}onChange={onChange} placeholder="email address"/>
    </div>
    <div className= "relative mb-5">
       <input className="mt-4 border-2 transition duration-500 placeholder-blue-200 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p" type={showPassword ? "text": "password"} id='password' value={password}onChange={onChange} placeholder="Password"/>
      {  showPassword? 
      <AiFillEyeInvisible className= "absolute right-3 top-7 cursor-pointer" onClick={()=>setShowpassword((prevState)=>!prevState)} /> : 
      <AiFillEye className="absolute right-3 top-7 cursor-pointer" onClick={()=>setShowpassword((prevState)=>!prevState)} /> }
    </div>
    <div className="flex justify-between whitespace-nowrap text-md sm:text-lg">
      <p className="mb-4">Have a account?
        <Link to={"../signin"} className="text-red-500 hover:text-red-800"> Login</Link>
      </p>
      
    </div>
    <button className="w-full bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md
  hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg" type="submit">Sign in</button>
  <div className="flex items-center my-4 before:border-t before:flex-1
  before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
    <p className="text-center font-semibold mx-2 ">
      OR
    </p>
  </div>
  <div>
    <OAutho/>
  </div>

  </form>
  

  </div>
</div>
   </section>
  )
}
