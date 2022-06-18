import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/authentications/login"
import Signup from "../pages/authentications/signup"
import MovieList from "../pages/movies/movie-list"
import { isAuthenticated } from "../token/token.data"

export const PublicRouter = (props: any) => {
    const isLoggedIn = isAuthenticated();
    return (
        <Routes>
            <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<MovieList />} />
        </Routes>
    )
}