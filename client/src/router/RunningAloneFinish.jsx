import React from "react";
import styled from 'styled-components';
import background from "../components/image/running_finish_back.png";
import { motion } from "framer-motion";
import Character from "../components/running_alone_finish/Character";
import Button from "../components/running_alone_finish/Button";



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

const BigText = styled.div`
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 80% */
    position:absolute;
    top:123px;
`;

const SmallText = styled.div`
    width: 308px;
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE B/24 */
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    position:absolute;
    top:240px;

`;



function RunningAloneFinish() {
    return(
        
        <Container style={{ backgroundImage: `url(${background})` }}>
            <Button />
            <BigText>
                The finish of 
                running
            </BigText>
            <SmallText>
                It was a great journey!

            </SmallText>
            
            <Character />
            
        </Container>
        
    );
}

export default RunningAloneFinish;