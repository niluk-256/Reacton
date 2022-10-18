import React, { useState } from "react"
import { OAutho } from "../components/OAuth"
import { sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
import { getAuth } from "firebase/auth"

export default function Forgotpaswd() {
  const [email, setEmail] = useState()
  //------------
  async function whensubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      toast.error("Error! reset password")
    }
  }

  function onChange(e) {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Forgot Password</h1>
      <div className="flex flex-wrap mb-8">
        <div className="md:w-[67%]  lg:w-[50%] mb-12 md:mb-6">
          <img
            className="  w-50% rounded-lg"
            src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] ml-4 mr-4 lg:w-[40%] lg:mt-10">
          <form onSubmit={whensubmit}>
            <div>
              <p className="mb-4 font-semibold">
                To reset your password enter your email address we'll send you
                instructions
              </p>
              <input
                className="mb-4 border-2 transition duration-500 placeholder-blue-200 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p"
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="email address"
              />
            </div>

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md
  hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg"
              type="submit"
            >
              Send Email
            </button>
            <div
              className="flex items-center my-4 before:border-t before:flex-1
  before:border-gray-400 after:border-t after:flex-1 after:border-gray-400"
            >
              <p className="text-center font-semibold mx-2 ">OR</p>
            </div>
            <div>
              <OAutho />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
