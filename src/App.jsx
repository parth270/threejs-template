import React from "react";

const App = (props) => {
  const [watch, setWatch] = React.useState(false);

  return (
    <>
      <div className="w-[100%] flex flex-col min-h-[100vh]  absolute top-0 z-2000">
        <div className="w-[100%] flex h-[100vh] p-[50px] ">
          <div className="w-[60%] ">
            <div className="w-[100%] mb-[-20px] opacity-[0.2] border-t-[1px] border-[#ccc] border-l-[1px] h-[20px]" />
            <div className="p-[20px] mt-[-30px]">
              <h1 className="text-white text-[20px] font-mono">
                Motleycrowd - LIVE
              </h1>
            </div>
          </div>
          <div className="w-[40%] ">
            <div
              className={`w-[100%] border-t-[1px] mb-[-20px] opacity-[${
                !watch ? 0.2 : 1
              }] duration-300 border-[#ccc] border-l-[1px] border-r-[1px] h-[20px]`}
            />
            <div
              className="p-[20px] pt-[10px] h-[60px] mt-[0]  cursor-pointer "
              onMouseEnter={() => {
                setWatch(true);
              }}
              onMouseLeave={() => {
                setWatch(false);
              }}
            >
              <div className="flex w-[100%] justify-between items-center ">
                <h1 className="text-white text-[14px] font-mono uppercase tracking-[3px] font-bold">
                  Watch our Reel
                </h1>
              </div>
              <h1 className="text-white text-[40px] mt-[50px] w-[80%] font-mono tracking-wider leading-[60px]">
                Motley Crowd imagines, explores and builds immersive events for
                the digital age.
              </h1>
              <div
                className="w-[240px] mt-[30px] border-t-[2px] border-[#cb5ce3] pt-[20px]"
                onClick={() => {}}
              >
                <p className="text-[#cb5ce3] text-[18px] w-[120px] tracking-wider">
                  Explore our projects
                </p>
              </div>
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
