import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Explore from "./Components/Pages/Explore/Explore";
import ItemDetails from "./Components/Pages/ItemDetails/ItemDetails";
import Author from "./Components/Pages/Author/Author";
import CreateYours from "./Components/Pages/CreateYours/CreateYours";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/itemdetails",
    element: <ItemDetails />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/createyours",
    element: <CreateYours />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
