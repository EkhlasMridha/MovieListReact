import { createReducer } from "@reduxjs/toolkit";
import { updateLoginStatus, updateTokenStatus } from "./common.action";

export interface ICommonState {
    isLoggedIn: boolean;
    tokenExpire: boolean;
}

const initialState: Partial<ICommonState> = {
    isLoggedIn: false,
    tokenExpire: false
}

export const commonReducer = createReducer(initialState, builder => {
    builder.addCase(updateLoginStatus, (state, action) => {
        state = {
            ...state,
            isLoggedIn: action.payload
        }
        return state;
    })
        .addCase(updateTokenStatus, (state, action) => {
            state = {
                ...state,
                tokenExpire: action.payload
            }
            return state;
        })
})