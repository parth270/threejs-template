import gsap, { Power4 } from "gsap";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import imgs from "../../../shared/images";
import Images from "./Image";
const Container = () => {
  const state = useSelector((state) => state.three);
  const ref = useRef();
  React.useEffect(() => {
    const tl = gsap.timeline();
    if (state.page) {
      tl.to(ref.current.position, {
        z: -(state.page - 1) * 20,
        duration: 2.0,
        delay: 0.75,
        onUpdate: () => {
          //   const pro = tl.progress();
          //   ref.current.material.opacity = pro * 1;
          // ref.current.lookAt(0, 1.125*pro, 5.5*pro)
        },
        ease: Power4.easeInOut,
      });
    }
  }, [state.page]);
  return (
    <>
      <group position={[0, 0, 0]} ref={ref} rotation={[0, (Math.PI * 0) / 2, 0]} >
        <Images src={imgs[0].src} check={state.page !== null} pos={[0, 0, 0]} />
        <Images
          src={imgs[1].src}
          check={state.page !== null}
          pos={[0, 0, 20]}
        />
        <Images
          src={imgs[2].src}
          check={state.page !== null}
          pos={[0, 0, 40]}
        />
        <Images
          src={imgs[3].src}
          check={state.page !== null}
          pos={[0, 0, 60]}
        />
        <Images
          src={imgs[4].src}
          check={state.page !== null}
          pos={[0, 0, 80]}
        />
        <Images
          src={imgs[5].src}
          check={state.page !== null}
          pos={[0, 0, 100]}
        />
        <Images
          src={imgs[6].src}
          check={state.page !== null}
          pos={[0, 0, 120]}
        />
        <Images
          src={imgs[7].src}
          check={state.page !== null}
          pos={[0, 0, 140]}
        />
      </group>
      {/* <Images src={imgs[0].src} check={(state.page-1)===imgs[0].id} />
      <Images src={imgs[1].src} check={(state.page-1)===imgs[1].id} />
      <Images src={imgs[2].src} check={(state.page-1)===imgs[2].id}  />
      <Images src={imgs[3].src} check={(state.page-1)===imgs[3].id}  />
      <Images src={imgs[4].src} check={(state.page-1)===imgs[4].id}  />
      <Images src={imgs[5].src} check={(state.page-1)===imgs[5].id}  />
      <Images src={imgs[6].src} check={(state.page-1)===imgs[6].id}  />
      <Images src={imgs[7].src} check={(state.page-1)===imgs[7].id}  /> */}
    </>
  );
};

export default Container;
