import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import background from "../components/image/running_ing_back.png";
import { motion } from "framer-motion";
import Guage from "../components/running_friend_ing/Guage";
import Character from "../components/running_friend_ing/Character";
import Coin from "../components/running_friend_ing/Coin";

const Container = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover; 
`;


function RunningFriendIng() {
    
    return (
        <Container style={{ backgroundImage: `url(${background})` }}>
            <Guage />
            <Character />
            <Coin />
        </Container>
    );
}

export default RunningFriendIng;
