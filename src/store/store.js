import { configureStore } from "@reduxjs/toolkit";
import translate from "./translate";

export const store = configureStore({
    reducer: {
        translate
    }
})