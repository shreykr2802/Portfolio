

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
    content: any;
    error: string;
    loading: boolean;
    activeId: string;
}

const initialState = {
    content: {},
    error: "",
    loading: false,
    activeId: "0"
} as ContentState;

const contentSlice = createSlice({
    name: "contentData",
    initialState,
    reducers: {
        fetchContentDataStart: (state, action) => {
            state.error = "";
            state.loading = true;
            state.activeId = action.payload;
        },
        fetchContentDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.content = action.payload;
        },
        fetchContentDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { fetchContentDataStart, fetchContentDataSuccess, fetchContentDataFailed } = contentSlice.actions;
export default contentSlice.reducer;