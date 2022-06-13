import axios, { AxiosResponse } from "axios";
import { TokenModel } from "../token/token.model";

export class AuthApi {
    signup = (payload: any): Promise<any> => {
        return axios.post<any>("auth/signup", payload).then(res => res.data);
    }

    login = (payload: any): Promise<TokenModel> => {
        return axios.post<TokenModel>("auth/login", payload).then(res => res.data);
    }
}
