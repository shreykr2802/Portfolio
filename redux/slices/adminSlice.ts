import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminState {
    resultTag: any,
    resultBlog: any,
    error: string,
    loading: boolean
}

const initialState = {
    resultTag: "",
    resultBlog: "",
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
            state.resultTag = action.payload
        },
        insertNewTagFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        insertNewBlogStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        insertNewBlogSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.resultBlog = action.payload
        },
        insertNewBlogFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { insertNewTagStart, insertNewTagSuccess, insertNewTagFailed, insertNewBlogStart, insertNewBlogSuccess, insertNewBlogFailed } = adminSlice.actions;
export default adminSlice.reducer;