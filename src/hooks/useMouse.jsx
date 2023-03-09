import React from 'react';

const useMouse=()=>{
    const [x,setX]=React.useState(0);
    const [y,setY]=React.useState(0);

    React.useEffect(()=>{
        window.addEventListener("mousemove", (e) => {
            setX(e.clientX);
            setY(e.clientY);
          });
    },[])

    return {x,y}
}

export default useMouse;