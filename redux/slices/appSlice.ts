import { createSlice } from "@reduxjs/toolkit";
import { AppTypes } from "../types";

const initialState = {
    colorSideBar: 'indigo',
    showColorSideBar: false,
} as AppTypes;

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSideBarColorSelected: (state, action) => {
            state.colorSideBar = action.payload;
        },
        setShowColorSideBar: (state) => {
            state.showColorSideBar = !state.showColorSideBar
        }
    },
});

export const { setSideBarColorSelected, setShowColorSideBar } = appSlice.actions;
export default appSlice.reducer;
