import axios from "axios";
import { getToken } from "../token/token.data";

export const basePath = "http://localhost:4000/"

var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use((config: any) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = "Bearer " + token.accessToken;
    }
    config.url = basePath + config.url;
    return config;
})

export default axios;