import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Container = styled.div`
    width: 114px;
    height: 32px;
    justify-contents:center;
    flex-shrink: 0;
    position:relative;
    bottom:-45%;
    border-radius: 10px;
    background: var(--font-font-gray, rgba(255, 255, 255, 0.40));
`;

const Text = styled.div`
    width: 98.241px;
    color: var(--font-font-default, #414F64);
    text-align: center;

    /* RUNNINGMATE B/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;
    text-align:center;
    justify-contents:center;
    position:relative;
    left:7.71px;
    top:4px;
`;

function Gohome(){
    const navigate = useNavigate();
    const kal = useSelector((state) => state.kal); 
    const time = useSelector((state) => state.time);
    const distance = useSelector((state)=>state.distance);
    const coin = useSelector((state => state.coin));
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const handleButtonClick = () => {
        // 버튼 클릭 시 페이지 이동
        console.log(minutes,kal,distance)
        navigate("/");
    };
    return(
        <Container onClick={handleButtonClick}>
            <Text>Go home</Text>
        </Container>
    );
}

export default Gohome;