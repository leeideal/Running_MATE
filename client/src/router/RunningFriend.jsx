import React, {useState} from "react";
import Location from "../components/running_friend/location";
import styled from 'styled-components';
import Header from "../components/running_friend/Header";
import background from "../components/image/running_back.png"
import background2 from "../components/image/running_back2.png";
import { motion } from "framer-motion";
import Goalset from "../components/running_friend/Goalset";
import Start from "../components/running_friend/Start"
import Character from "../components/running_friend/Character";

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
//background-image : url(${background});


function RunningFriend() {
  const [backgroundImage, setBackgroundImage] = useState(background);

  const handleBackgroundChange = (newBackground) => {
    setBackgroundImage(newBackground);
  };

  return (
    <Container style={{ backgroundImage: `url(${backgroundImage})` }} >
      <Header />
      <Character />
      <Goalset />
      <Start onBackgroundChange={handleBackgroundChange} />
    </Container>
  );
}

export default RunningFriend;
