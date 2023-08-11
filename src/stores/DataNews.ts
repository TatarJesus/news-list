import { createSlice } from "@reduxjs/toolkit";

const stateDataNewsSlice = createSlice({
  name: "dataNews",
  initialState: {
    data: [],
  },
  reducers: {
    addDataNews(state, action) {
      state.data = state.data.concat(action.payload);
    },
    delDataNews(state) {
      state.data = [];
    },
  },
});

export const { addDataNews, delDataNews } =
  stateDataNewsSlice.actions;

export default stateDataNewsSlice.reducer;
