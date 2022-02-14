import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminState {
    result: any,
    error: string,
    loading: boolean
}

const initialState = {
    result: "",
    error: "",
    loading: false
} as AdminState;

const adminSlice = createSlice({
    name: "adminData",
    initialState,
    reducers: {
        insertNewTagStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        insertNewTagSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.result = action.payload
        },
        insertNewTagFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { insertNewTagStart, insertNewTagSuccess, insertNewTagFailed } = adminSlice.actions;
export default adminSlice.reducer;