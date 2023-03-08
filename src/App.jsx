import React, { Suspense } from "react";
import CanvasContainer from "./components/three/Container";

const App = (props) => {
  return (
    <>
      <div className="w-[100%] min-h-[100vh] bg-[#3b082c]  z-20">
        <Suspense fallback={<></>}>
          <CanvasContainer />
        </Suspense>
      </div>
    </>
  );
};

export default App;