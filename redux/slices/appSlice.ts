import { createSlice } from "@reduxjs/toolkit";
import { AppTypes } from "../types";

const initialState = {
    showContactForm: false
} as AppTypes;

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setShowContactForm: (state) => {
            state.showContactForm = !state.showContactForm
        }
    },
});

export const { setShowContactForm } = appSlice.actions;
export default appSlice.reducer;
