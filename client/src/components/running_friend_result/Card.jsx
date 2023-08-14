import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import Address from "./Address";
import Date from "./Dateinfo";
import Character from "./Character";

const Container = styled.div`
    width: 340px;
    height: 243px;
    flex-shrink: 0;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    position:absolute;
    top:188px;
   
`;


function Card() {
    return(
        <Container >
            <Date />
            <Address />
            <Character />
        </Container>
    )
}

export default Card;