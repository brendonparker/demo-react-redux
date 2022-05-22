import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    todos: [],
    header: "",
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push({ id: +new Date(), title: "" });
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((x) => x.id !== action.payload.id);
    },
    update: (state, action) => {
      const todo = state.todos.find((x) => x.id === action.payload.id);
      todo.title = action.payload.title;
    },
    updateHeader: (state, action) => {
      state.header = action.payload.header;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update, updateHeader } = mainSlice.actions;

export default mainSlice.reducer;
