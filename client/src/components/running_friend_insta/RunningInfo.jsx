import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const Infocontainer = styled.div`
    flexDirection:row;
    position:relative;
    top:29px;
    width:300px;
    left:21px;
    justify-content:flex-between;
    display: inline-flex;
    transform: rotate(-90deg);
    align-items: flex-start;
    gap: 11.95px;

    position:relative;
    top:95px;
    left:150px;
`;


const Min = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: right;
    font-family: Outfit;
    font-size: 79.668px;
    font-style: normal;
    font-weight: 700;
    line-height: 79.668px; /* 100% */
`;


const Mintag = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;
    font-family: Outfit;
    font-size: 27.884px;
    font-style: normal;
    font-weight: 500;
    line-height: 39.834px; /* 142.857% */
    letter-spacing: 0.07px;

    position:relative;
    left:39px;
    
`;

const Kal = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: right;
    font-family: Outfit;
    font-size: 79.668px;
    font-style: normal;
    font-weight: 700;
    line-height: 79.668px; /* 100% */
`;

const Kaltag = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;
    font-family: Outfit;
    font-size: 27.884px;
    font-style: normal;
    font-weight: 500;
    line-height: 39.834px; /* 142.857% */
    letter-spacing: 0.07px;
    position:relative;
    left:39px;
`;

const Km = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: right;
    font-family: Outfit;
    font-size: 79.668px;
    font-style: normal;
    font-weight: 700;
    line-height: 79.668px; /* 100% */

`;

const Kmtag = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;
    font-family: Outfit;
    font-size: 27.884px;
    font-style: normal;
    font-weight: 500;
    line-height: 39.834px; /* 142.857% */
    letter-spacing: 0.07px;
    position:relative;
    left:39px;
  
`;


function RunningInfo(){
    const kal = useSelector((state) => state.kal); 
    const time = useSelector((state) => state.time);
    const distance = useSelector((state)=>state.distance);
    const coin = useSelector((state => state.coin));
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    return(
        <Infocontainer>
                <Min>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                    <Mintag>MIN</Mintag>
                </Min>      
                <Kal>{kal.toFixed(0)}
                    <Kaltag>KAL</Kaltag>
                </Kal>
                <Km>{distance.toFixed(2)}
                    <Kmtag>KM</Kmtag>
                </Km>
            </Infocontainer>
    );
}

export default RunningInfo;