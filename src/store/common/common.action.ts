import { createAction } from "@reduxjs/toolkit";

export const updateLoginStatus = createAction<boolean>("[Common] Update login status");
export const updateTokenStatus = createAction<boolean>("[Common] update token status");