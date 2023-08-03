import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Loader.css";
import { useLocation } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Explore from "./Components/Pages/Explore/Explore";
import Author from "./Components/Pages/Author/Author";
import CreateYours from "./Components/Pages/CreateYours/CreateYours";
import ItemDetailsPage from "./Components/Pages/ItemDetails/ItemDetailsPage";

function Loader() {
  return <span className="loader"></span>;
}

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
    element: <ItemDetailsPage />,
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )}
    </div>
  );
}

root.render(<App />);

reportWebVitals();
