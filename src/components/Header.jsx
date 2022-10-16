import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname)
    //-----------------
    function pathMathRoute(route){
  if(route === location.pathname){
    return true
  }
  //------------------------

    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
<header className="flex justify-between items-center px-3 max-w-6xl mx-auto" >
    <div>
        <h1 className="bg-green-300 px-5 cursor-pointer" onClick={()=>navigate("/")}>LOGO</h1>
    </div>
<div >
    <ul className='flex space-x-10'>
        
        <li 
        onClick={()=>navigate("/")}
        className={` cursor-pointer  py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent 
        ${pathMathRoute("/")  && "text-black border-b-green-500"}` }>Home</li>
        <li 
         onClick={()=>navigate("/signin")}
        className={` cursor-pointer  py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent 
        ${pathMathRoute("/signin")  && "text-black border-b-green-500"}` }>SignIn</li>
        <li
         onClick={()=>navigate("/profile")}
        className={` cursor-pointer  py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent 
        ${pathMathRoute("/profile")  && "text-black border-b-green-500"}` }>Profile</li>
    </ul>
</div>
   
</header>
    </div>
  )
}
