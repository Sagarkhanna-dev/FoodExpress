import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slice1"

export const store = configureStore({
    reducer : {
        Slice1 : slice1Reducer,
    }
})
