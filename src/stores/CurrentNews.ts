import { createSlice } from "@reduxjs/toolkit";

const stateCurrentNewsSlice = createSlice({
  name: "currentNews",
  initialState: {
    data: {
      id: 0,
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
    },
  },
  reducers: {
    updateNews(state, action) {
      state.data = action.payload;
    },
    setDefault(state) {
      state.data = {
        id: 0,
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
    },
  },
});

export const { updateNews, setDefault } = stateCurrentNewsSlice.actions;

export default stateCurrentNewsSlice.reducer;
