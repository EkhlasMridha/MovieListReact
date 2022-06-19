import { createReducer } from "@reduxjs/toolkit";
import { addMovieSuccess, getMovies, updateMovieSuccess, updatePageNumber, updatePageSize } from "./movie.action";

export interface IMovieState {
    movieList: any[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    isCreating: boolean;
    isLoadingList: boolean;
}

export const initialState: Partial<IMovieState> = {
    movieList: [],
    totalCount: 0
}

export const movieReducer = createReducer(initialState, builder => {
    builder.addCase(addMovieSuccess, (state, action) => {
        state = {
            ...state,
            movieList: (state.movieList ?? []).concat(action.payload),
            totalCount: (state.totalCount ?? 0) + 1,
        }
        return state;
    })
        .addCase(updateMovieSuccess, (state, action) => {
            let update = state.movieList?.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
            state = {
                ...state,
                movieList: update
            }
            return state;
        })
        .addCase(getMovies.pending, (state, action) => {
            state = {
                ...state,
                isLoadingList: true
            }
            return state;
        })
        .addCase(getMovies.fulfilled, (state, action) => {
            state = {
                ...state,
                isLoadingList: false,
                movieList: action.payload?.data,
                totalCount: action.payload?.total,
                pageNumber: action.payload?.pageNumber
            }

            return state;
        })
        .addCase(updatePageSize, (state, action) => {
            state = {
                ...state,
                pageSize: action.payload
            }
            return state;
        })
        .addCase(updatePageNumber, (state, action) => {
            state = {
                ...state,
                pageNumber: action.payload
            }
            return state;
        })
})