import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import { useNavigate } from 'react-router-dom';
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";

import { isData } from "../../atoms";
import { useRecoilValue } from "recoil";

const Container = styled.div`
    width:100%;
    height:100%
    display: flex;
    justify-content: center;
    align-items: center;
`;

const User = styled.img`
    width: 211px;
    height: 300px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    left:100px;
    top:384px;
    z-index:1;
    
`;

function Character (){
    const navigate = useNavigate();
    const userDB = useRecoilValue(isData);
    const handleClick = () => {
        navigate("/running/alone/finish");
    }

    return(
        <Container>
            <User src={userDB?.character ? profile : profile2} onClick={handleClick} />
        </Container>
    )
}

export default Character;