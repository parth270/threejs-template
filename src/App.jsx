import React from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import {
  changePage,
  changeRotation,
  closeMenu,
  openMenu,
  setRoute,
} from "./services/three";

const pages = [
  {
    id:0,
    theme:"#e376e2",
    back:"#2b0032"
  },
  {
    id:1,
    theme:"#e376e2",
    back:"#e376e2"
  },
  {
    id:2,
    theme:"#ee913e",
    back:"#ee913e",
  },
  {
    id:3,
    theme:"#ee913e",
    back:"#ee913e",
  },
  {
    id:4,
    theme:"#dacf20",
    back:"#dacf20",
  },
  {
    id:5,
    theme:"#568694",
    back:"#568694"
  },
  {
    id:6,
    theme:"#429ae8",
    back:"#429ae8",
  },
  {
    id:7,
    theme:"#e24c4a",
    back:"#e24c4a",
  },
]
const App = (props) => {
  const [watch, setWatch] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.three);
  const [route, setRoutes1] = React.useState("Home");
  const [route1, setRoutes2] = React.useState("Home");
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
      setTimeout(() => {
        setRoutes2("Slider");
      }, 500);
    } else if (state.route === "Home") {
      setTimeout(() => {
        setRoutes1("Home");
      }, 1000);
      setTimeout(() => {
        setRoutes2("Home");
      }, 500);
    }
  }, [state.route]);

  const theme = {
    color:pages[state.current].theme
  }

  console.log(state.current,theme);

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
                    opacity: state.route === "Slider" ?state.page===null? 1:0 : 0,
                    transform:
                      state.route !== "Home"
                        ? "translateY(-35px)"
                        : "translateY(0px)",
                  }}
                  duration={1}
                >
                  <div className="mt-[140px]">
                    <h1 className="text-white text-[32px] mt-[50px] w-[400px] leading-[50px] font-mono tracking-wider leading-[60px]">
                      A Virtual Open Days event featuring12 academic islands
                    </h1>
                    <div className={`w-[180px] cursor-pointer duration-1000 flex items-center justify-between pt-[20px]  text-[16px] mt-[30px] border-t-[2px] `}
                      style={{
                        color:theme.color,
                        borderColor:theme.color
                      }}
                      onClick={()=>{
                        console.log("page is loading");
                        dispatch(changePage(1));
                      }}
                    >
                      <p className="w-[140px] font-medium tracking-wider ">SDU Open Days</p>
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
          <Tween
            from={{
              width: "950px",
            }}
            to={{
              width: state.route === "Slider" ? "200px" : "950px",
            }}
            duration={0.5}
          >
            <div className={`duration-500 delay-1000`}>
              <div
                className={`w-[100%] border-t-[1px] mb-[-20px] opacity-[${
                  !watch ? 0.2 : 1
                }] duration-300 border-[#ccc] border-l-[1px] border-r-[1px] h-[20px]`}
              />
              <div className="p-[20px] pt-[10px] h-[60px] mt-[0]  cursor-pointer ">
                <div className="flex w-[100%] justify-between items-center ">
                  <h1
                    className="text-white text-[14px] font-mono uppercase tracking-[3px] font-bold whitespace-nowrap"
                    onMouseEnter={() => {
                      setWatch(true);
                    }}
                    onMouseLeave={() => {
                      setWatch(false);
                    }}
                  >
                    {route === "Slider" ? "About us" : "Watch our Reel"}
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
                      opacity: state.route === "Home" ? 1 : 0,
                    }}
                    delay={0.8}
                    duration={1}
                  >
                    <h1 className="text-white text-[40px] mt-[50px] w-[80%] font-mono tracking-wider leading-[60px]">
                      Motley Crowd imagines, explores and builds immersive
                      events for the digital age.
                    </h1>
                    <div
                      className="w-[240px] mt-[30px] border-t-[2px] border-[#cb5ce3] pt-[20px]"
                      onClick={() => {
                        if (intialWait) {
                          dispatch(openMenu());
                          dispatch(setRoute({ route: "Slider" }));
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
          </Tween>
        </div>
      </div>
      {state.route === "Home" && (
        <p className="text-white text-[12px] font-medium tracking-[3px] fixed right-[30px] bottom-[30px] z-50">
          <span className="text-[#cb5ce3] font-bold ">PLAY</span> {">"} 0:57
        </p>
      )}
      {route1 === "Slider" && <Navigation route={route} current={state.route} />}
    </>
  );
};

export default App;
