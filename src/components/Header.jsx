import React from 'react'


export default function Header() {
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
<header className="flex justify-between items-center px-3 max-w-6xl mx-auto" >
    <div>
        <h1 className="bg-green-300 px-5">LOGO</h1>
    </div>
<div >
    <ul className='flex space-x-10'>
        
        <li>Home</li>
        <li>SignIn</li>
        <li>Profile</li>
    </ul>
</div>
   
</header>
    </div>
  )
}
