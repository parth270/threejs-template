import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation, useRoutes } from "react-router-dom";
import { setRoute } from "../services/three";

const Home = () => {
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();
  const router = useNavigate();
  const [starting, setStarting] = React.useState(false);
  React.useEffect(() => {
    if (starting) {
        console.log(state)
        if(state.route==="Slider"){
            router("Home");
        }else if(state.route==="Home"){
            router("/");
        }
    }else if(state.route!=="Home"){
        dispatch(setRoute({route:"Home"}));
        console.log("Home");
    }
    setStarting(true);
  }, [state.route]);


  return <></>;
};

export default Home;