import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../data-api/movie.api";
import { PaginationQuery } from "../../models/pagination.model";

export const addMovie = createAsyncThunk<any, any>(
    "[Movie] Create movie",
    async (payload, thunkAPI) => {
        const result = await movieApi.createMovie(payload).then(res => res);
        return result;
    }
);

export const getMovies = createAsyncThunk<any, PaginationQuery>(
    "[Movie] get movie by filter with pagination",
    async (paramters, thunkApi) => {
        const result = await movieApi.getMovies(paramters).then(res => res);
        return result;
    }
)