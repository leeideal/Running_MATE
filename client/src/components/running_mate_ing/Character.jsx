import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Friendimg from "../image/FriendCharacter.png";
import Callimg from "../image/call.png";
import { useNavigate } from 'react-router-dom';
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";
import { isData } from "../../atoms";
import { useRecoilValue } from "recoil";

const User = styled.img`
    width: 211px;
    height: 300px;
    flex-shrink: 0;
    position:absolute;
    left:56px;
    top:384px;
    z-index:1;
    
`;

const Friend = styled.img`
    top:30px;
    display: flex;
    width: 195px;
    height: 239px;
    flex-shrink: 0;
    filter: blur(2.5px);
    position:absolute;
    right:4px;
    top:295px;
    z-index:0;  
`;

const Matename = styled.div`
    color: var(--font-font-light, #819EC7);
    text-align: center;

    /* RUNNINGMATE B/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    position: absolute;
    top: 282px;
    right: 70px;
    display: flex; 
    align-items: center;
    justify-content: center; 

`;



function Character (){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/running/friend/finish");
    }
    const userDB = useRecoilValue(isData);

    return(
        <>
            <User src={userDB?.character ? profile : profile2} onClick={handleClick} />
    
            <Friend src={Friendimg} />
            <Matename>Gabriel</Matename>
        </>
    )
}

export default Character;