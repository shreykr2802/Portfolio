

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogState {
    blogs: any[];
    error: string;
    loading: boolean;
    blogData: any
}

const initialState = {
    blogs: [],
    error: "",
    loading: false,
    blogData: {}
} as BlogState;

const blogSlice = createSlice({
    name: "blogData",
    initialState,
    reducers: {
        fetchBlogDataStart: (state) => {
            state.error = "";
            state.loading = true;
        },
        fetchBlogDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.blogs = action.payload;
        },
        fetchBlogDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        fetchBlogDataByIdStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        fetchBlogDataByIdSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.blogData = action.payload;
        },
        fetchBlogDataByIdFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        fetchBlogTagsDataStart: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = true;
        },
        fetchBlogTagsDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.blogs = action.payload;
        },
        fetchBlogTagsDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { fetchBlogDataStart, fetchBlogDataSuccess, fetchBlogDataFailed,
    fetchBlogDataByIdStart, fetchBlogDataByIdSuccess, fetchBlogDataByIdFailed,
    fetchBlogTagsDataStart, fetchBlogTagsDataSuccess, fetchBlogTagsDataFailed } = blogSlice.actions;
export default blogSlice.reducer;