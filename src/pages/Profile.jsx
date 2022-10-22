import React from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../firebase"
import { doc, updateDoc } from "firebase/firestore"
// import { useAuthstatus } from "../hooks/useAuthstatus"
//-------------------
export default function Profile() {
  const useState = React.useState
  const navigate = useNavigate()
  const auth = getAuth()
  const [formData, setformData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const [changeDetaiks, setDetails] = useState(false)

  const { name, email } = formData
  function onLogout() {
    auth.signOut()
    navigate("/")
  }
  function onchange(e) {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update displayname in fire base auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        //name in fire store
        const docRef = doc(db, "user ", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        })
      }
    } catch (error) {
      toast.error("could not update profile details")
    }
  }

  return (
    <div>
      <section>
        <h1 className="text-3xl text-center m-6 font-bold"> Profile</h1>
        <div className="w-full md:[50%] mt-6 px-3">
          <form action="">
            {/* name */}
            <input
              type="text"
              id="name"
              value={name}
              className={`w-full text-center font-bold border-transparent ${
                changeDetaiks && "bg-red-200 focus:bg-red-200"
              }`}
              disabled={!changeDetaiks}
              onChange={onchange}
            />
            {/* email */}
            <input
              type="text"
              id="name"
              value={`Email: ${email}`}
              disabled
              className="w-full text-center font-bold border-transparent"
            />
            <div className="flex justify-between mt-4 whitespace-nowrap sm:text-lg mb-6">
              <p>
                Do you want to edit your name?
                <span
                  onClick={() => {
                    changeDetaiks && onSubmit()
                    setDetails((preve) => !preve)
                  }}
                  className="text-red-500 p-1 hover:text-red-800 cursor-pointer"
                >
                  {changeDetaiks ? "Apply change" : "edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="sm:mr-96  text-cyan-600 hover:text-cyan-800 cursor-pointer "
              >
                SignOut
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
