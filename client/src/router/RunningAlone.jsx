import React, {useState} from "react";
import Location from "../components/running_alone/location";
import styled from 'styled-components';
import Header from "../components/running_alone/Header";
import background from "../components/image/running_alone_back.png"
import background2 from "../components/image/running_back2.png";
import { motion } from "framer-motion";
import Goalset from "../components/running_alone/Goalset";
import Start from "../components/running_alone/Start"
import Character from "../components/running_alone/Character";
import { Provider } from "react-redux";
import store from '../store.js';

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-repeat : no-repeat;
  background-size : cover;
`;


function RunningAlone() {
  const [backgroundImage, setBackgroundImage] = useState(background);

  const handleBackgroundChange = (newBackground) => {
    setBackgroundImage(newBackground);
  };


  return (
    <Provider store={store}>
      <Container style={{ backgroundImage: `url(${backgroundImage})` }} >
      <Location />
        <Header />
        
        <Character />
        
        <Goalset />
        
        <Start onBackgroundChange={handleBackgroundChange} />
        
      </Container>
 
    </Provider>
  );
}

export default RunningAlone;