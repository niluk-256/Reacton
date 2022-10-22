import React, { useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { OAutho } from "../components/OAuth"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Signin() {
  const navigate = useNavigate()
  const [showPassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  function onChange(e) {
    // e.preventDefault()
    // console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onclickSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      const usercredintials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      if (usercredintials.user) {
        navigate("/")
        toast.success("Successful!")
      }
    } catch (error) {
      toast.error("Some thing went wrong")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Sign In</h1>
      <div className="flex flex-wrap mb-8">
        <div className="md:w-[67%]  lg:w-[50%] mb-12 md:mb-6">
          <img
            className="  w-50% rounded-lg"
            src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] ml-4 mr-4 lg:w-[40%] lg:mt-10">
          <form onSubmit={onclickSubmit}>
            <div>
              <input
                className="border-2 transition duration-500 placeholder-gray-500 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p"
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="email address"
              />
            </div>
            <div className="relative mb-5">
              <input
                className="mt-4 border-2 transition duration-500 placeholder-gray-500 focus:placeholder-transparent border-blue-400 w-full py-2  text-black-400 bg-transparent rounded-md focus:outline-none text-left md:p"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-7 cursor-pointer"
                  onClick={() => setShowpassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-7 cursor-pointer"
                  onClick={() => setShowpassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-md sm:text-lg">
              <p className="mb-4">
                Don't have a account?
                <Link
                  to={"../signup"}
                  className="text-red-500 hover:text-red-800"
                >
                  {" "}
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"../forgotpaswd"}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Forgot Password ?
                </Link>
              </p>
            </div>
            <button
              onClick={onclickSubmit}
              className="w-full bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md
  hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg"
              type="submit"
            >
              Sign in
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
