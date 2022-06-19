import { combineReducers, configureStore, Dispatch } from "@reduxjs/toolkit";
import { commonReducer } from "./common/common.reducer";
import { movieReducer } from "./movies/movie.reducer";

const combineReducer = combineReducers({
    movie: movieReducer,
    common: commonReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === "[Account] Logout user success") {
        state = undefined;
    }
    return combineReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch | Dispatch<any>;
export type RootState = ReturnType<typeof combineReducer>;
export const rootDispatch = store.dispatch;