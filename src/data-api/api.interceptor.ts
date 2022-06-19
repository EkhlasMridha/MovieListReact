import axios from "axios";
import { updateLoginStatus, updateTokenStatus } from "../store/common/common.action";
import { rootDispatch } from "../store/store";
import { getToken, removeToken } from "../token/token.data";

export const basePath = "http://localhost:4000/"

var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use((config: any) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = "Bearer " + token.accessToken;
    }
    config.url = basePath + config.url;
    return config;
});

axios.interceptors.response.use((config) => {
    return config;
}, (error) => {
    if (error.response.status === 401) {
        removeToken();
        rootDispatch(updateLoginStatus(false));
        rootDispatch(updateTokenStatus(true));
    }
    return Promise.reject(error)
})

export default axios;