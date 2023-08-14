import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Friendimg from "../image/FriendCharacter.png";
import Callimg from "../image/call.png";

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
    right:36px;
    top:270px;

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

function Character (){
    const handleClick = () => {
        window.location.href="/running/friend/finish"
    }

    return(
        <>
            <User src={Userimg} onClick={handleClick} />
    
            <Friend src={Friendimg} />
            <Namebox>
                <Call src={Callimg}/>
                <Friendname>Ericsson</Friendname>
            </Namebox>
        </>
    )
}

export default Character;