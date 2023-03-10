import React from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeRotation,
  closeMenu,
  openMenu,
  setRoute,
} from "./services/three";

const App = (props) => {
  const [watch, setWatch] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.three);
  const [route, setRoutes1] = React.useState("Home");
  const [intialWait, setInitialWait] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setInitialWait(true);
    }, 5000);
  });

  React.useEffect(() => {
    if (state.route === "Slider") {
      setTimeout(() => {
        setRoutes1("Slider");
      }, 1000);
    } else if (state.route === "Home") {
      setTimeout(() => {
        setRoutes1("Home");
      }, 1000);
    }
  }, [state.route]);
  console.log(route, "please check here");
  return (
    <>
      <div className="w-[100%] flex flex-col min-h-[100vh]  absolute top-0 z-2000">
        <div className="w-[100%] flex h-[100vh] p-[50px] ">
          <div className="w-[100%] ">
            <div className="w-[100%] mb-[-20px] opacity-[0.2] border-t-[1px] border-[#ccc] border-l-[1px] h-[20px]" />
            <div className="p-[20px] mt-[-30px] h-[100%] w-[100%] flex flex-col">
              <h1
                className="text-white text-[20px] font-mono cursor-pointer"
                onClick={() => {
                  dispatch(closeMenu());
                  dispatch(setRoute({ route: "Home" }));
                }}
              >
                Motleycrowd - LIVE
              </h1>
              {route === "Slider" && (
                <Tween
                  from={{
                    opacity: 0,
                    transform: "translateY(0px)",
                  }}
                  to={{
                    opacity: state.route === "Slider" ? 1 : 0,
                    transform:
                      state.route !== "Home"
                        ? "translateY(-35px)"
                        : "translateY(0px)",
                  }}
                  duration={1}
                >
                  <div className="mt-[100px]">
                    <h1 className="text-white text-[32px] mt-[50px] w-[30%] leading-[50px] font-mono tracking-wider leading-[60px]">
                      A Virtual Open Days event featuring12 academic islands
                    </h1>
                    <div className="w-[180px] cursor-pointer flex items-center justify-between pt-[20px] text-[#d9975b] text-[16px] mt-[60px] border-t-[2px] border-[#d9975b]">
                      <p className="w-[120px]">SDU Open Days</p>
                      <p>{">"}</p>
                    </div>
                  </div>
                </Tween>
              )}
              {route === "Home" && (
                <Tween
                  from={{
                    opacity: 0,
                    transform: "translateY(0px)",
                  }}
                  to={{
                    opacity: state.route === "Home" ? 1 : 0,
                    transform:
                      state.route !== "Home"
                        ? "translateY(-35px)"
                        : "translateY(0px)",
                  }}
                  duration={1}
                >
                  <div className="w-[284px] mt-auto">
                    <h4 className="text-[14px] font-bold text-white font-mono tracking-widest uppercase">
                      more about us{" "}
                      <span className="text-[#cb5ce3]">{">"}</span>
                    </h4>
                    <p className="text-[13.5px] leading-[23px] mt-[40px] text-[#919191] tracking-wider ">
                      Motley Crowd is a joint project from
                      <span className="text-white tracking-[1px]">
                        {" "}
                        Hello Monday, Dogstudio{" "}
                      </span>
                      and{" "}
                      <span className="text-white tracking-[1px]">
                        Set Snail
                      </span>
                      , born from friendships and mutual interests for the
                      fast-paced evolution of immersive events in the digital
                      world.<span className="text-white"> Contact us!</span>
                    </p>
                  </div>
                </Tween>
              )}
            </div>
          </div>
          <div className={`${state.route === "Slider" ? "w-[200]" : "w-[950px]"} duration-500 delay-1000`}>
            <div
              className={`w-[100%] border-t-[1px] mb-[-20px] opacity-[${
                !watch ? 0.2 : 1
              }] duration-300 border-[#ccc] border-l-[1px] border-r-[1px] h-[20px]`}
            />
            <div className="p-[20px] pt-[10px] h-[60px] mt-[0]  cursor-pointer ">
              <div className="flex w-[100%] justify-between items-center ">
                <h1
                  className="text-white text-[14px] font-mono uppercase tracking-[3px] font-bold"
                  onMouseEnter={() => {
                    setWatch(true);
                  }}
                  onMouseLeave={() => {
                    setWatch(false);
                  }}
                >
                  {state.route === "Slider" ? "About us" : "Watch our Reel"}
                </h1>
              </div>

              {route === "Home" && (
                <Tween
                  from={{
                    opacity: 0,
                    transform: "translateY(0px)",
                  }}
                  to={{
                    opacity: state.route === "Home" ? 1 : 0,
                    transform:
                      state.route !== "Home"
                        ? "translateY(-35px)"
                        : "translateY(0px)",
                  }}
                  duration={1}
                >
                  <h1 className="text-white text-[40px] mt-[50px] w-[80%] font-mono tracking-wider leading-[60px]">
                    Motley Crowd imagines, explores and builds immersive events
                    for the digital age.
                  </h1>
                  <div
                    className="w-[240px] mt-[30px] border-t-[2px] border-[#cb5ce3] pt-[20px]"
                    onClick={() => {
                      if (intialWait) {
                        dispatch(openMenu());
                        dispatch(setRoute({ route: "Slider" }));
                        dispatch(changeRotation(1));
                      }
                    }}
                  >
                    <p className="text-[#cb5ce3] text-[18px] w-[120px] tracking-wider">
                      Explore our projects
                    </p>
                  </div>
                </Tween>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-[12px] font-medium tracking-[3px] fixed right-[30px] bottom-[30px] z-50">
        <span className="text-[#cb5ce3] font-bold ">PLAY</span> {">"} 0:57
      </p>
    </>
  );
};

export default App;
