import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/authentications/login"

export const PublicRouter = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}