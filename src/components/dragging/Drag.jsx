import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragMove, isDragging } from "../../services/three";

const useDrag = () => {
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();
  const [drag,setDrag] = useState({
    x:0,y:0
  })
  const ref = useRef(0);
  const mouseDown = (e) => {
    dispatch(isDragging(true));
    setDrag({
        x:e.clientX,
        y:e.clientY
    })
};
const mouseUp = (e) => {
    dispatch(isDragging(false));
    setDrag({
        x:0,
        y:0
    })
    dispatch(dragMove({ x: 0, y: 0 }));
  };
  const mouseMove = (e) => {
    if (state.dragging) {
        console.log(drag.x,e.clientX,ref.current.x)
      const x = drag.x-e.clientX 
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      console.log(x, y, "Moveeeeeeeeee");
    //   const X = drag.x - x;
      const Y = drag.y - y;
    //   console.log(X, Y, "Moveeeeeeeeee");
      dispatch(dragMove({ x: x, y: Y }));
    }
  };

  return {
    up: mouseUp,
    down: mouseDown,
    move: mouseMove,
  };
};

export default useDrag;
