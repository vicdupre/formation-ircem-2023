import { configureStore } from "@reduxjs/toolkit";
import { FakeStoreContextProvider } from "../contexts/FakeStoreContext";
import postReducer from "../redux/reducers/postsReducer";
import peopleReducer from "../redux/reducers/peopleReducer";
import counterSlice from "../redux/slices/counterSlice";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const TestsProviders = ({ children }) => {
  const store = configureStore({
    reducer: {
      posts: postReducer,
      people: peopleReducer,
      counter: counterSlice,
    },
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <FakeStoreContextProvider>{children}</FakeStoreContextProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default TestsProviders;
