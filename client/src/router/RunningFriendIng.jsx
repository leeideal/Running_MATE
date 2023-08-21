import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import background from "../components/image/running_ing_back.png";
import { motion } from "framer-motion";
import Gauge from "../components/running_friend_ing/Gauge";
import Character from "../components/running_friend_ing/Character";
import Coin from "../components/running_friend_ing/Coin";
import Speed from "../components/running_friend_ing/Speed";
import Music from "../components/running_friend_music/Music";
import { Provider } from "react-redux";
import store from '../store.js';


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
        <Provider store={store}>
            <Container style={{ backgroundImage: `url(${background})` }}>
                <Gauge />
                <Character />
                <Coin />
                <Speed />
                <Music />
            </Container>
        </Provider>
    );
}

export default RunningFriendIng;
