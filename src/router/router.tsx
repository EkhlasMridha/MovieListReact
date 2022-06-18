import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/authentications/login";
import Signup from "../pages/authentications/signup";
import { EditMovie } from "../pages/movies/Edit/movie.edit";
import MovieList from "../pages/movies/movie-list";
import { isAuthenticated } from "../token/token.data";
import { ProtectedRoutes } from "./protected.routes";


export const PublicRouter = (props: any) => {
    const isLoggedIn = isAuthenticated();
    return (
        <Routes>
            <Route path="/" element={<Navigate to={isLoggedIn ? "/movies" : "/login"} replace />} />
            <Route path={"/login"} element={<ProtectedRoutes needAuthentication={false} />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path={"/signup"} element={<ProtectedRoutes needAuthentication={false} />}>
                <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path="/" element={<ProtectedRoutes />}>
                <Route key={"movies"} path="/movies" element={<MovieList {...props} />} />
                <Route key={"mod-movie"} path="/movies/:id" element={<EditMovie {...props} />} />
            </Route>
        </Routes>
    )
}