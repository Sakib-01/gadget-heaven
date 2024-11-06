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
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Signup from "./components/Signup/Signup.jsx";
import NewRoute from "./components/NewRoute/NewRoute.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";
import Chart from "./components/Rechart/Chart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wish",
            element: <Wish></Wish>,
          },
        ],
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
        children: [
          {
            path: "/statistic",
            element: <Chart></Chart>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/signup",
        element: <NewRoute></NewRoute>,
        children: [
          {
            path: "/signup",
            element: <Signup></Signup>,
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
