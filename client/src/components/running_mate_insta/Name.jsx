import React from "react";
import styled from 'styled-components';

const Username = styled.div`
    color: var(--white, #FFF);
    text-align: right;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);

    /* RUNNINGMATE B/28 */
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */
    position:absolute;
    top:70px;
    right:50px;

`;
const Friendname = styled.div`
    color: var(--white, #FFF);
    text-align: center;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);

    /* RUNNINGMATE B/28 */
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */
    position:absolute;
    top:70px;
    left:130px;
`;


{/*유저,친구 이름 받아오는 작업 필요 */}

function Name(){
    return(
        <>
            <Username>@Jon</Username>
            <Friendname>@Gabriel</Friendname>
        </>
        
    );
}

export default Name;