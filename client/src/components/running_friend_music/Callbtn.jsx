import React from 'react';
import styled from "styled-components";
import Name from '../running_friend_insta/Name';
import callimg from "../image/call.png";

// 통화 종료 버튼

const Namebox = styled.div`
    width: 136px;
    height: 38px;
    flex-shrink: 0;
    background:  #61ECFF;
    opacity: 0.7px;
    color: var(--primary-primary-dark-1, #00518B);
    text-align: center;
    display: flex; 
    align-items: center;
    justify-content: center; 
    position: absolute;
    top:120px;
    left:30px;

    border-radius: 100px;
`;

/* 친구이름 불러와야함 */
const Friendname = styled.div`
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 
    letter-spacing: 0.03px;
    margin-left: 8px; 
`;

const Call = styled.img`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
`;

function Callbtn(){
    return(
        <Namebox>
            <Call src={callimg} />
            <Friendname>swimkiim</Friendname>
        </Namebox>
    );
}

export default Callbtn;