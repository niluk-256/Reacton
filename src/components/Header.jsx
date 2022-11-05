import React from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function Header() {
  const useState = React.useState
  const useEffect = React.useEffect
  const [pagestate, setstate] = useState("Sign In")
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.pathname)
  //-------------
  const auth = getAuth()
  //using use effects to check changes of auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setstate("Profile")
      } else {
        setstate("Sign In")
      }
    })
  }, [auth])

  //-----------------
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true
    }
    //------------------------
  }
  return (
    <div className="shadow-lg sticky top-0 z-50 bg-slate-800 ">
      <header className=" flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <h1
            className=" bg-sky-300 px-5 cursor-pointer hover:border-b-sky-700 font-semibold "
            onClick={() => navigate("/")}
          >
            0xNiluk
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              onClick={() => navigate("/")}
              className={` cursor-pointer  py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent 
        ${pathMathRoute("/") && "text-gray-400 border-b-sky-500"}`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={` cursor-pointer  py-3 font-semibold text-gray-600 border-b-[3px] border-b-transparent 
        ${
          pathMathRoute("/signin") ||
          (pathMathRoute("/profile") && "text-gray-400 border-b-sky-500")
        } `}
            >
              {pagestate}
            </li>
            <li
              onClick={() => navigate("/about")}
              className={` cursor-pointer  py-3 font-semibold text-gray-600 border-b-[3px] border-b-transparent 
        ${pathMathRoute("/about") && "text-gray-400 border-b-sky-500"}`}
            >
              About Me
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
