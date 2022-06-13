import { TokenModel } from "./token.model";

export const accessToken = "accessToken";

export const setToken = (token: TokenModel) => {
    localStorage.setItem(accessToken, token.accessToken ?? "");
}

export const removeToken = () => {
    localStorage.removeItem(accessToken);
}

export const getToken = (): TokenModel => {
    let token = localStorage.getItem(accessToken);

    let data: TokenModel = {
        accessToken: token
    }
    return data;
}

export const isAuthenticated = (): boolean => {
    let token = getToken();
    if ((token?.accessToken ?? "") === "") {
        return false
    }
    return true;
}