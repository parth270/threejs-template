import React from "react";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage, changeRotation, currentVid } from "../../services/three";

const Navigation = ({ route }) => {

  const titles = [
    {
      title: "Page-1",
      id: 0,
    },
    {
      title: "Page-2",
      id: 1,
    },
    {
      title: "Page-3",
      id: 2,
    },
    {
      title: "Page-4",
      id: 3,
    },
    {
      title: "Page-5",
      id: 4,
    },
    {
      title: "Page-6",
      id: 5,
    },
    {
      title: "Page-7",
      id: 6,
    },
    {
      title: "Page-8",
      id: 7,
    },
  ];
  const state = useSelector(state=>state.three);
  const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(state.page===null){
      dispatch(currentVid(selected));
    }
  }, [selected]);

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
                  dispatch(changePage(i+1));
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
