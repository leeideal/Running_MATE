import React from "react";
import styled from 'styled-components';
import background from "../components/image/running_back.png";
import { motion } from "framer-motion";

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

function RunningFriendMusic() {
    
    return(
        <>
            <Container style={{backgroundImage: `url(${background})`}} >
            </Container>

        </>
    );
}

export default RunningFriendMusic;