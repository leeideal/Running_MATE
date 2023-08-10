import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import background from "../components/image/running_finish_back.png";
import { motion } from "framer-motion";
import Card from "../components/running_friend_result/Card";

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

const Text = styled.div`
    color: var(--font-font-default, #414F64);

    /* RUNNINGMATE B/34 */
    font-family: Outfit;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 117.647% */
    position:absolute;
    top:86px;
`;

function RunningFriendResult(){
    return(
        <Container style={{ backgroundImage: `url(${background})` }}>
            <Text>My Running</Text>
            <Card />
        </Container>
        
    );
}

export default RunningFriendResult;