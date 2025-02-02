import { configureStore } from "@reduxjs/toolkit";
import weatherSlicer from "./weatherSlicer.js";

const store = configureStore({
    reducer: {
        weather: weatherSlicer.reducer,
    },
});

export default store;