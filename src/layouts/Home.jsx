import React from "react";
import CanvasContainer from "../components/three/Container";

const Home = (props) => {
  return (
    <>
      <div className="w-[100%] min-h-[100vh]  absolute z-20">
        <CanvasContainer />
      </div>
      <div className="w-[100%] min-h-[100vh] bg-transparent absolute z-10">
        {props.children}
      </div>
    </>
  );
};

export default Home;
