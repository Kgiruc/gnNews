import { configureStore } from '@reduxjs/toolkit'
import viewReducer from './features/viewSlice'
import resultsReducer from './features/resultsSlice'

export const store = configureStore({
    reducer: {
        view: viewReducer,
        results: resultsReducer,
    },
})