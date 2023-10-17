import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { FakeStoreContextProvider } from "./contexts/FakeStoreContext";
import peopleReducer from "./redux/reducers/peopleReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./redux/reducers/postsReducer";

const store = configureStore({
  reducer: { people: peopleReducer, posts: postReducer },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FakeStoreContextProvider>
        <RouterProvider router={router} />
      </FakeStoreContextProvider>
    </Provider>
  </React.StrictMode>
);
