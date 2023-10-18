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
import counterSlice from "./redux/slices/counterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
};

/* const store = configureStore({
  reducer: {
    people: persistReducer(persistConfig, peopleReducer),
    posts: persistReducer(persistConfig, postReducer),
    counter: persistReducer(persistConfig, counterSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

//Il faut transformer la donnée de tous nos reducers en objets pour éviter des conflits avec Redux Persist
 */

const store = configureStore({
  reducer: {
    people: peopleReducer,
    posts: postReducer,
    counter: counterSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <FakeStoreContextProvider>
        <RouterProvider router={router} />
      </FakeStoreContextProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
