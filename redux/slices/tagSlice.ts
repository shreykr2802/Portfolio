import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TagState {
    tags: any[];
    error: string;
    loading: boolean;
    plainTags: any[]
}

const initialState = {
    tags: [],
    error: "",
    loading: false,
    plainTags: []
} as TagState;

const tagSlice = createSlice({
    name: "tagData",
    initialState,
    reducers: {
        fetchTagDataStart: (state) => {
            state.error = "";
            state.loading = true;
        },
        fetchTagDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.tags = action.payload;
        },
        fetchTagDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        fetchPlainTagDataStart: (state) => {
            state.error = "";
            state.loading = true;
        },
        fetchPlainTagDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.plainTags = action.payload;
        },
        fetchPlainTagDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { fetchTagDataStart, fetchTagDataSuccess, fetchTagDataFailed, fetchPlainTagDataStart, fetchPlainTagDataSuccess, fetchPlainTagDataFailed } = tagSlice.actions;
export default tagSlice.reducer;