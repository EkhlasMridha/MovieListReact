import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../token/token.data";

interface ProtectedRouteProps {
    needAuthentication?: boolean;
    isPublic?: boolean;
}

const DEFAULT_VALUE: Partial<ProtectedRouteProps> = {
    needAuthentication: true,
    isPublic: false
}

export const ProtectedRoutes = (props: ProtectedRouteProps) => {
    const configs = { ...DEFAULT_VALUE, ...props };
    let authenticated = isAuthenticated();

    if (configs.isPublic) {
        return <Outlet />
    }

    if (!configs.needAuthentication && authenticated) {
        return <Navigate to={"/movies"} replace />
    }

    if (configs.needAuthentication && !authenticated) {
        return <Navigate to={"/login"} />
    }

    return <Outlet />
}