import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    token: string,
    error: string,
    loading: boolean
}

const initialState = {
    token: "",
    error: "",
    loading: false
} as AuthState;

const authSlice = createSlice({
    name: "authData",
    initialState,
    reducers: {
        fetchAuthStart: (state, action: PayloadAction<{ username: string, password: string }>) => {
            state.error = "";
            state.loading = true;
        },
        fetchAuthSuccess: (state, action: PayloadAction<string>) => {
            state.error = "";
            state.loading = false;
            state.token = action.payload
        },
        fetchAuthFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { fetchAuthStart, fetchAuthSuccess, fetchAuthFailed } = authSlice.actions;
export default authSlice.reducer;