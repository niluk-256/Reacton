import React from "react"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export function OAutho() {
  async function onGoogleclick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)
    } catch (error) {
      toast.error("could not authorize with google")
    }
  }
  return (
    <button
      onClick={onGoogleclick}
      className=" flex items-center text-white justify-center w-full py-3 px-7 bg-red-700 rounded-lg hover:bg-red-800 active:shadow-lg font-bold "
    >
      <FcGoogle className="font-semibold bg-white rounded-full mr-1 " />
      Continue with Google
    </button>
  )
}
