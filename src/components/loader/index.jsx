import React from "react";

const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#3b082c] absolute z-10 flex items-center justify-center ">
      <div className="animate-spin flex w-[60px] justify-between">
        <div
          class="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#ccc] align-[-0.125em] opacity-1 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
