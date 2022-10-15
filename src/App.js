import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Forgotpaswd from "./pages/Forgotpaswd"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgotpaswd" element={<Forgotpaswd />} />
                </Routes>
            </Router>
        </div>
    )
}
export { App }
