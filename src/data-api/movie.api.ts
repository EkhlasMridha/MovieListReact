import axios from "./api.interceptor"
import { Pagination, PaginationQuery } from "../models/pagination.model";

export class MovieApi {
    saveMovie = (payload: any): Promise<any> => {
        return axios.post("movie", payload).then(res => res.data);
    }

    getMovies = (query: Partial<PaginationQuery>): Promise<Pagination<any>> => {
        return axios.get<Pagination<any>>('movie/byfilter', {
            params: { ...query }
        }).then(res => res.data)
    }

    getMovieById = (id: any) => {
        return axios.get<any>(`movie/${id}`).then(res => res.data);
    }

    deleteMovieById = (id: any) => {
        return axios.delete<any>(`movie/${id}`).then(res => res.data);
    }
}

export default new MovieApi();