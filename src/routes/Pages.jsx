import React from "react";
import { Tween } from "react-gsap";

const Pages = () => {
  return (
    <Tween
    from={{
        opacity:0
    }}
        to={{
            opacity:1
        }}
        duration={0.8}
        delay={1}
    >
    <div className="w-full h-[100vh] bg-[#41314e] absolute z-100">
      <h1 className="text-black text-[40px]">Fuck it</h1>
    </div>
    </Tween>
  );
};

export default Pages;
