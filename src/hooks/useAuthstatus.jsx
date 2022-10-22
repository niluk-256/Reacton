import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"

export function useAuthstatus() {
  const [loggedIn, setloggedin] = useState(false)
  const [checkingStatus, setcheckingStatus] = useState(true)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedin(true)
      }
      setcheckingStatus(false)
    })
  }, [])
  return { loggedIn, checkingStatus }
}
