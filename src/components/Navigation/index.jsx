import React from "react";
import { Tween } from "react-gsap";
import { useDispatch } from "react-redux";
import { changeRotation, currentVid } from "../../services/three";

const Navigation = ({ current, route }) => {
  console.log(current, route);
  const [show, setShow] = React.useState(route);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(current);
    }, 1000);
  });

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

  const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(currentVid(selected));
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
      <div className="w-[100%] h-[40px] absolute flex items-center justify-center  bottom-[40px] left-[0] text-white"
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
              className={`text-[16px] tracking-[2px] ${
                selected === i ? "text-white" : "text-[#ccc]"
              } h-[18px] uppercase leading-[18px] font-medium cursor-pointer font-mono ${
                i === 0
                  ? ""
                  : "border-l-[2px] border-[#fff] ml-[20px] pl-[20px]"
              }  `}
              onClick={() => {
                setSelected(i);
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
