import { Navigate } from "react-router-dom"
import { useAuthstatus } from "../hooks/useAuthstatus"
import Profile from "../pages/Profile"
import { Spinner } from "./spinner"
export function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthstatus()
  if (checkingStatus) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return loggedIn ? <Profile /> : <Navigate to={"/signin"} />
}
