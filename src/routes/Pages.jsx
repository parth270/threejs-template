import React, { useState } from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changePage, setRoute } from "../services/three";
import classes from "../components/cross/index.module.css";
import dummy from "../shared/content";
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
        <div className="w-[50%] h-[400px]">
          <div className="flex justify-between items-center border-b-[2px] border-[#fff] pb-[15px]">
            <h1 className="text-[40px] uppercase text-white ">
              {dummy[Number(Path) - 1].title}
            </h1>
            <div
              className={classes.container}
              onClick={() => {
                dispatch(setRoute("Home"));
                setClose(true);
                setTimeout(() => {
                  router("/");
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
          <div className="w-full h-[400px] p-[20px] mt-[30px] pr-[100px] overflow-y-auto scroll-bar-cool">
            <p className="text-white text-[16px] tracking-wider">
              {dummy[Number(Path) - 1].para}
            </p>
          </div>
        </div>
      </div>
    </Tween>
  );
};

export default Pages;
