import React from "react";
import styled from 'styled-components';
import background from "../components/image/running_back.png";
import { motion } from "framer-motion";
import Callbtn from "../components/running_friend_music/Callbtn";
import Header from "../components/running_friend_music/Header";
import Search from "../components/running_friend_music/Search";

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

const Text = styled.div`
    width: 328px;
    height: 73px;
    flex-shrink: 0;
    color: var(--font-font-default, #414F64);

    /* RUNNINGMATE B/28 */
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */

    position:absolute;
    top:168px;
`;

function RunningFriendMusic() {
    
    return(
        <>
            <Container style={{backgroundImage: `url(${background})`}} >
                <Callbtn />
                <Header />
                <Text>
                    Before running, <br />
                    Choose music together!
                </Text>
                <Search />
            </Container>

        </>
    );
}

export default RunningFriendMusic;