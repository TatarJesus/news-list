import { createSlice } from "@reduxjs/toolkit";

const defaultData = {
  id: -1,
  title: "",
  points: 0,
  user: "",
  time: 0,
  time_ago: "",
  comments_count: 0,
  type: "",
  url: "",
  domain: "",
  comments: [],
};

const stateCurrentNewsSlice = createSlice({
  name: "currentNews",
  initialState: {
    data: defaultData,
  },
  reducers: {
    updateNews(state, action) {
      if (action.payload === "no data") {
        state.data = defaultData;
        state.data.title = "The news is not relevant or there is no such news";
      } else state.data = action.payload;
    },
    setDefault(state) {
      state.data = defaultData;
    },
  },
});

export const { updateNews, setDefault } = stateCurrentNewsSlice.actions;

export default stateCurrentNewsSlice.reducer;
