import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Products />,
        path: "products",
      },
      {
        path: "product/:productId",
        element: <Product />,
        errorElement: <NotFound />,
      },
      {
        element: <Posts />,
        path: "posts",
      },
    ],
  },
]);

export default router;
