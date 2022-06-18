import axios from "./api.interceptor";
import { TokenModel } from "../token/token.model";
class AuthApi {
    signup = (payload: any): Promise<any> => {
        return axios.post<any>("auth/signup", payload).then(res => res.data);
    }

    login = (payload: any): Promise<TokenModel> => {
        return axios.post<TokenModel>("auth/login", payload).then(res => res.data);
    }
}

export default new AuthApi();