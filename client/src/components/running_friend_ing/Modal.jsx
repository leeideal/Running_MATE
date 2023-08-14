import Header from "../running_friend/Header";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background: rgba(34, 34, 34, 0.90);
    z-index:1000;
`;



function Modal(){
    const speed = useSelector((state) => state.speed);
    const kal = useSelector((state) => state.kal); 
    const km = useSelector((state) => state.km);
    console.log({kal})
    console.log({km})
    const time = useSelector((state) => state.time);
    const distance=useSelector((state)=>state.distance);
    return(
        <Container>
            <Header>Running</Header>
            <div>
          {/* Display values from the Redux store */}
                <p>Speed: {speed} km/h</p>
                <p>Kal: {kal}</p>
                <p>Time: {time} </p>
                <p>Distance: {distance}</p>
            </div>

        </Container>
    );
}

export default Modal;