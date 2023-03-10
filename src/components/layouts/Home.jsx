import React from "react";
import App from "../../App";
import Loader from "../loader";
import CanvasContainer from "../three/Container";

const Home = ({children}) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <CanvasContainer />
      <App />
      {children}
    </React.Suspense>
  );
};

export default Home;
