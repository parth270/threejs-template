import React from 'react';

const useMouse=()=>{
    const [x,setX]=React.useState(0);
    const [y,setY]=React.useState(0);

    React.useEffect(()=>{
        window.addEventListener("mousemove", (e) => {
            setX((e.clientX/window.innerWidth)*2-1);
            setY(-(e.clientY/window.innerHeight)*2+1);
          });
    },[])

    return {x,y}
}

export default useMouse;