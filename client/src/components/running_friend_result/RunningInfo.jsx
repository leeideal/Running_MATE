import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Infocontainer = styled.div`
    flexDirection:row;
    position:relative;
    top:29px;
    width:300px;
    left:21px;
    display: inline-flex;
    align-items: flex-start;
    justify-content:flex-between;
`;


const Min = styled.div`
    width: 114px;
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
`;


const Mintag = styled.div`
    width: 38.182px;
    color: rgba(65, 79, 100, 0.40);
    text-align: center;

    /* RUNNINGMATE R/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;

    position:relative;
    left:39px;
    
`;

const Kal = styled.div`
    width: 114px;
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
`;

const Kaltag = styled.div`
    width: 38.182px;
    color: rgba(65, 79, 100, 0.40);
    text-align: center;

    /* RUNNINGMATE R/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    position:relative;
    left:39px;
`;

const Km = styled.div`
    width: 114px;
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */

`;

const Kmtag = styled.div`
    width: 38.182px;
    color: rgba(65, 79, 100, 0.40);
    text-align: center;

    /* RUNNINGMATE R/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
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