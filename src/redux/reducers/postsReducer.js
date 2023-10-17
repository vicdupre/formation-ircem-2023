import { createReducer } from "@reduxjs/toolkit";
import { addPost, removePost } from "../actions/postsActions";

const postReducer = createReducer([], (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removePost, (state, action) => {
      return state.filter((post) => post.id != action.payload);
    });
});

export default postReducer;
