import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    resultsState: ""
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState, 
    reducers: {
        changeResults: (state, actions) => {
            state.resultsState = actions.payload;
        },
    },
});

export const { changeResults } = resultsSlice.actions

export default resultsSlice.reducer