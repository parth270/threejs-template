import React from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage, changeRotation, currentVid, transitionEvent, transitionEventCurrent } from "../../services/three";

const Navigation = ({ route }) => {

  const titles = [
    {
      title: "introduction",
      id: 0,
    },
    {
      title: "history",
      id: 1,
    },
    {
      title: "value proposition",
      id: 2,
    },
    {
      title: "culture",
      id: 3,
    },
    {
      title: "one store",
      id: 4,
    },
    {
      title: "growing pains",
      id: 5,
    },
    {
      title: "final thoughts",
      id: 6,
    },
    {
      title: "next course",
      id: 7,
    },
  ];
  const state = useSelector(state=>state.three);
  const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(state.page===null){
      console.log("thiss is exxecuting!");
      dispatch(transitionEventCurrent(false));
      setTimeout(()=>{
        dispatch(currentVid(selected));
        dispatch(transitionEventCurrent(true));
      },500);
    }
  }, [selected]);

  React.useEffect(()=>{
    if(state.current!==selected){
      setSelected(state.current);
    }
  },[state.current]);

  return (
    <Tween
      from={{
        opacity: 0,
        display: "none",
      }}
      to={{
        opacity: route === "Slider" ? 1 : 0,
        display: route === "Slider" ? "flex" : "none",
      }}
      delay={0.5}
    >
      <div className="w-[100%] h-[40px] absolute flex items-center justify-center  bottom-[30px] left-[0] text-white"
        style={{
            zIndex:"120"
        }}
      >
        <p
          className={`text-white text-[25px] h-[18px] uppercase leading-[18px] font-[800] font-mono mr-[20px] mt-[-1px] cursor-pointer `}
        >
          {"<"}
        </p>
        {titles.map((item, i) => {
          return (
            <p
            key={i}
              className={`text-[16px] tracking-[2px] ${
                selected === i ? "text-[#b30030]" : "text-white"
              } h-[18px] uppercase leading-[18px] font-medium cursor-pointer font-mono ${
                i === 0
                  ? ""
                  : "border-l-[2px] border-[#fff] ml-[20px] pl-[20px]"
              }  `}
              onClick={() => {
                setSelected(i);
                if(state.page!==null){
                  dispatch(transitionEvent(false));
                  setTimeout(()=>{
                    dispatch(changePage(i+1));
                    dispatch(transitionEvent(true));
                  },1000);
                }
              }}
            >
              {item.title}
            </p>
          );
        })}
        <p
          className={`text-white text-[25px] h-[18px] uppercase leading-[18px] font-[800] font-mono ml-[20px] mt-[-1px] cursor-pointer`}
        >
          {">"}
        </p>
      </div>
    </Tween>
  );
};

export default Navigation;
