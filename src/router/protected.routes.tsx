import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { updateTokenStatus } from "../store/common/common.action";
import { useAppDispatch, useAppSelector } from "../store/hook.type";
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
    let commonState = useAppSelector(state => state.common);
    let dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (commonState.tokenExpire) {
            dispatch(updateTokenStatus(false));
            navigate("/login");
        }
    }, [commonState.tokenExpire])

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