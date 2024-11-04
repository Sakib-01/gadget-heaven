import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Cards from "./components/Cards/Cards.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ShowProduct from "./components/ShowProduct/ShowProduct.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wish from "./components/Wish/Wish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "/showProduct",
        element: <ShowProduct></ShowProduct>,
        children: [
          {
            path: "/showProduct/product/:id",
            element: <ProductDetails></ProductDetails>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wish",
            element: <Wish></Wish>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
