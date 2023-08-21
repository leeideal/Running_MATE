import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import { useNavigate } from 'react-router-dom';

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

    const handleClick = () => {
        navigate("/running/alone/finish");
    }

    return(
        <Container>
            <User src={Userimg} onClick={handleClick} />
        </Container>
    )
}

export default Character;