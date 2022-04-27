import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminState {
    resultTag: any,
    resultBlog: any,
    resultUpdateBlog: any,
    resultUpdateTag: any,
    error: string,
    loading: boolean
}

const initialState = {
    resultTag: "",
    resultBlog: "",
    resultUpdateBlog: "",
    resultUpdateTag: "",
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
        updateBlogStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        updateBlogSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.resultUpdateBlog = action.payload
        },
        updateBlogFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateATagStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        updateATagSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.resultUpdateTag = action.payload
        },
        updateATagFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearResultStart: (state) => {
            state.error = "";
            state.loading = true;
        },
        clearResultSuccess: (state) => {
            state.error = "";
            state.loading = false;
            state.resultUpdateTag = "";
            state.resultBlog = "";
            state.resultTag = "";
            state.resultUpdateBlog = "";
        },
        clearResultFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { insertNewTagStart, insertNewTagSuccess, insertNewTagFailed,
    insertNewBlogStart, insertNewBlogSuccess, insertNewBlogFailed,
    updateBlogStart, updateBlogSuccess, updateBlogFailed,
    updateATagStart, updateATagSuccess, updateATagFailed,
    clearResultStart, clearResultSuccess, clearResultFailed } = adminSlice.actions;
export default adminSlice.reducer;