import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptSlice from "./gptSlice";
import configReducer from "./configSlice";

const appstore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptSlice,
            config: configReducer,
         },
    }
)
export default appstore;
