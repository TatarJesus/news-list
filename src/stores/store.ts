import { configureStore } from "@reduxjs/toolkit";
import dataNewsReducer from "./DataNews";
import currentNewsReducer from "./CurrentNews";

const store = configureStore({
  reducer: {
    dataNews: dataNewsReducer,
    currentNews: currentNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
