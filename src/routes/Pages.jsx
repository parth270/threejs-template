import React, { useRef, useState } from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changePage,
  currentVid,
  openMenu,
  setRoute,
  transitionEvent,
  transitionEventCurrent,
} from "../services/three";
import classes from "../components/cross/index.module.css";
import dummy from "../shared/content";
import gsap, { Power4, SteppedEase } from "gsap";
const Pages = () => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [close, setClose] = useState(false);
  const state = useSelector((state) => state.three);
  const location = useLocation();
  React.useEffect(() => {
    if (state.page === null) {
      router("/");
    }
  });

  // const Path = location.pathname[location.pathname.length - 1];
  // const Path = 1
  const Path = location.pathname[location.pathname.length - 1];
  React.useEffect(() => {
    const path = location.pathname[location.pathname.length - 1];

    console.log(path);
    if (state.page !== null) {
      if (path !== state.page) {
        router(`/Home/${state.page}`);
      }
    }
  }, [state.page]);
  const title = useRef();
  const para = useRef();
  // React.useEffect(()=>{

  //   const tl = gsap.timeline();
  //   tl.fromTo(title.current,
  //     {
  //       borderRightColor: "rgba(255,255,255,0.75)",
  //       repeat: -1,
  //       ease:  SteppedEase.config(37),
  //       duration:0.5
  //     }
  //     ,{
  //     borderRightColor: "rgba(255,255,255,0)",
  //     repeat: -1,
  //     ease:  SteppedEase.config(37),
  //     duration:0.5
  //   });
  // },[]);
  let width;
  React.useEffect(() => {
    if (state.pageTransition) {
      gsap.to(title.current, {
        width: "90%",
        duration: 1,
        ease: Power4.easeInOut,
      });
      gsap.to(para.current, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeInOut,
      });
    } else {
      gsap.to(title.current, {
        width: "0%",
        duration: 1,
        ease: Power4.easeInOut,
      });
      gsap.to(para.current, {
        opacity: 0,
        duration: 1,
        ease: Power4.easeInOut,
      });
    }
  }, [state.pageTransition]);

  return (
    <Tween
      from={{
        opacity: 0,
      }}
      to={{
        opacity: close ? 0 : 1,
      }}
      duration={1}
      delay={0}
    >
      <div className="w-full h-[100vh] bg-[transparent] absolute z-100 flex justify-between  py-[100px] pr-[80px]">
        <Tween
          from={{
            x: -500,
          }}
          to={{
            x: true ? -500 : 200,
            y: 30,
          }}
          delay={close ? 0 : 0.5}
          duration={0.5}
        >
          <img
            src="/test-1.png"
            className="ml-[-150px] ] w-[40%] h-[80vh] object-contain"
            alt=""
          />
        </Tween>
        <div className="w-[55%] h-[400px] pt-[30px]">
          <div className="flex justify-between items-center border-b-[2px] border-[#fff] pb-[15px]">
            <h1
              className={`text-[34px] uppercase text-white whitespace-nowrap border-r-[2px] pr-[4px] overflow-x-hidden border-[#fff]`}
              ref={title}
            >
              {dummy[Number(Path) - 1].title}
            </h1>
            <div className="w-[10%] flex justify-center">
              <div
                className={classes.container}
                style={{}}
                onClick={() => {
                  dispatch(setRoute({ route: "Slider" }));
                  dispatch(openMenu());
                  dispatch(currentVid(Number(Path)-1));
                  dispatch(transitionEventCurrent(true));
                  setClose(true);
                  setTimeout(() => {
                    router("/Home");
                    dispatch(transitionEvent(false));
                    dispatch(changePage(null));
                  }, 1000);
                }}
              >
                <span
                  className={classes.one}
                  style={{ backgroundColor: "#fff" }}
                />
                <span
                  className={classes.three}
                  style={{ backgroundColor: "#fff" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] p-[20px] mt-[30px] pr-[100px] overflow-y-auto scroll-bar-cool">
            <p className="text-white text-[16px] tracking-wider" ref={para}>
              {dummy[Number(Path) - 1].para}
            </p>
          </div>
        </div>
      </div>
    </Tween>
  );
};

export default Pages;
