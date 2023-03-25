import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    viewState: false
}

export const viewSlice = createSlice({
    name: 'view',
    initialState, 
    reducers: {
        changeView: (state) => {
            state.viewState = !state.viewState;
        },
    },
});

export const { changeView } = viewSlice.actions

export default viewSlice.reducer