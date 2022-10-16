import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export  function OAutho() {
  return (
    <button className=" flex items-center text-white justify-center w-full py-3 px-7 bg-red-700 rounded-lg hover:bg-red-800 active:shadow-lg font-bold ">
        <FcGoogle className="font-semibold bg-white rounded-full mr-1 "   />
         Continue with Google
    </button>
  )
}
