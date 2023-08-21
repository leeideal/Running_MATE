import React from "react";
import styled from 'styled-components';
import { Provider } from 'react-redux';
import background from "../components/image/running_finish_back.png";
import { motion } from "framer-motion";
import Card from "../components/running_Alone_result/Card";
import Coin from "../components/running_Alone_result/Coin";
import Share from "../components/running_Alone_result/Share";
import store from '../store'; 
import Insta from "./Insta.jsx"
import Gohome from "../components/running_Alone_result/Gohome";
import Callbtn from "../components/running_Alone_result/Callbtn";

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

function RunningAloneResult(){
    return (
        <Provider store={store}> {/* Redux 스토어를 Provider에 전달 */}
            <Container style={{ backgroundImage: `url(${background})` }}>
                <Text>My Running</Text>
                <Card />
                <Share />
                <Coin />
                <Gohome />
            </Container>
            
        </Provider>
    );
}

export default RunningAloneResult;
