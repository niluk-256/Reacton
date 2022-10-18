import React from "react"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { db } from "../firebase"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export function OAutho() {
  const navigate = useNavigate()
  async function onGoogleclick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)
      const docref = doc(db, "users", user.uid)
      const docsnap = await getDoc(docref)
      if (!docsnap.exists()) {
        await setDoc(docref, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      toast.success("Login Successful!")
      navigate("/")
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
