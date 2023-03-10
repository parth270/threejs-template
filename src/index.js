import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import Loader from "./components/loader";
import CanvasContainer from "./components/three/Container";
import HomeLayout from "./components/layouts/Home";
import Home from "./routes";
import Slider from "./routes/Slider";
import Pages from "./routes/Pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Slider/>,
  },{
    path:"/Home/:id",
    element:<Pages/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HomeLayout>
      <RouterProvider router={router} />
    </HomeLayout>
  </Provider>
);
