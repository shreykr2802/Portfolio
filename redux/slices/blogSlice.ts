

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogState {
    blogs: any[];
    error: string;
    loading: boolean;
}

const initialState = {
    blogs: [],
    error: "",
    loading: false
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
    }
});

export const { fetchBlogDataStart, fetchBlogDataSuccess, fetchBlogDataFailed } = blogSlice.actions;
export default blogSlice.reducer;