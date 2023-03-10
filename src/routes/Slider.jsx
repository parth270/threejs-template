import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { setRoute } from "../services/three";

const Slider = () => {
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();
  const router = useNavigate();
  const navigate = useLocation();
  const [starting, setStarting] = React.useState(false);

  React.useEffect(() => {
    if (starting) {
      console.log(state);
      if (state.route === "Slider") {
        router("Home");
      } else if (state.route === "Home") {
        router("/");
      }
    }

    setStarting(true);
  }, [state.route]);

  React.useEffect(()=>{

    if(state.route==="Home"){
        router("/")
    }
  })

  return <></>;
};

export default Slider;
