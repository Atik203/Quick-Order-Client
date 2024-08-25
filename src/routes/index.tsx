import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/Products";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
