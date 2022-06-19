import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../data-api/movie.api";
import { PaginationQuery } from "../../models/pagination.model";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { RootState } from "../store";

export const addMovieSuccess = createAction<any>("[Movie] Add movie success");
export const updateMovieSuccess = createAction<any>("[Movie] Update movie success");

export const getMovies = createAsyncThunk<any, PaginationQuery>(
    "[Movie] get movie by filter with pagination",
    async (paramters, thunkApi) => {
        const result = await movieApi.getMovies(paramters).then(res => res);
        return result;
    }
);

export const updatePageSize = createAction<number>("[Movie] Update page size");
export const updatePageNumber = createAction<number>("[Movie] Update page number");

export const deleteMovieSuccess = createAsyncThunk<any, number>(
    "[Movie] Delete movie success",
    async (parameter, thunkApi) => {
        const result = await movieApi.deleteMovieById(parameter).then(res => res);
        toast.success("Movie removed successfully");

        let state: RootState = thunkApi.getState() as RootState;
        thunkApi.dispatch(getMovies({
            pageNumber: state.movie.pageNumber ?? 1,
            pageSize: state.movie.pageSize ?? 3
        }))
        return parameter;
    }
);