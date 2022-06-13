import axios from "axios"
import { Pagination, PaginationQuery } from "../models/pagination.model";

export class MovieApi {
    createMovie = (payload: any): Promise<any> => {
        return axios.post("movie", payload).then(res => res.data);
    }

    getMovies = (query: PaginationQuery): Promise<Pagination<any>> => {
        return axios.get<Pagination<any>>('movie/byfilter', {
            params: {
                pageSize: query.pageSize,
                pageNumber: query.pageNumber,
                search: query.search,
                sort: query.sort
            }
        }).then(res => res.data)
    }
}

export default new MovieApi();