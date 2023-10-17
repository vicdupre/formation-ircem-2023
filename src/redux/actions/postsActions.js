import { createAction, nanoid } from "@reduxjs/toolkit";

const addPost = createAction("ADD_POST", ({ title, content }) => {
  return {
    payload: {
      title,
      content,
      id: nanoid(),
    },
  };
});

const removePost = createAction("REMOVE_POST", (id) => {
  return {
    payload: id,
  };
});

export { addPost, removePost };
