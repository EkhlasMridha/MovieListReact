import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/authentications/login"
import Signup from "../pages/authentications/signup"

export const PublicRouter = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}