import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/Home";
import { Provider } from "react-redux";
import { store } from "./services/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >

  <Home>
    <RouterProvider router={router} />
  </Home>
  </Provider>
);
