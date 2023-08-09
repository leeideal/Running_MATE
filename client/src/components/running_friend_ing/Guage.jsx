import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import usercharacter from '../image/UserCharacter.png';
import friendcharacter from '../image/FriendCharacter.png';
import { useSelector } from "react-redux";

const Guageback = styled.div`
    position: absolute;
    top: 88px;
    left: 25px; 
    width: 87%;
    height: 10px;
    flex-shrink: 0;
    border-radius: 20px;
    opacity: 0.8;
    background: #FFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25) inset;
`;

const Gauge = styled.div`
    position: absolute;
    top: 88px;
    left: 25px;
    flex-shrink: 0;
    width: ${ ({ progress }) => (progress)}%; 
    height: 10px;
    background-color: #AFFF7E;
    flex-shrink: 0;
    border-radius: 20px;
    opacity: 0.8;
`;

const Usermini = styled.img`
    position: absolute;
    top: 49px;
    left: ${ ({ progress }) => (progress)}%;
    width: 34px;
    height: 49px;
    flex-shrink: 0;
`;

const Friendmini = styled.img`
    position: absolute;
    top: 44px;
    left: ${({ progress2 }) => (progress2)}%;
    width: 45px;
    height: 54px;
    flex-shrink: 0;
`;

const Infocontainer = styled.div`

    flexDirection:"row";
    position:absolute;
    top:109px;
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


function Guage() {
    const [progress, setProgress] = useState(6);
    const [progress2, setProgress2] = useState(6);
    const [elapsedTime, setElapsedTime] = useState(0); 

    const timegoal = useSelector((state) => state.timegoal)
    const speed = useSelector((state) => state.speed)
    ///const timegoal = 300; // 시간목표(초 단위)
    //const speed = 200; //분속. 러닝평균속도는 200m에 1분 = 시속12km 
    //-> 속도 측정에 관해서 더 생각해봐야함.. 일단은 기본속도로 넣은것
    let METs = 0; //METS 초기값
    if((speed*60)/1000 < 5){
        METs = 4;
    }else if(((speed*60)/1000)>5 & ((speed*60)/1000)<8) {
        METs = 6;
    }else if(((speed*60)/1000)>8 & ((speed*60)/1000)<10){
        METs = 8;
    }else if(((speed*60)/1000)>10){
        METs = 10;
    }


    const weight = 60; // 체중. 유저정보에서 받아와야함
    const kal = METs*3.5*weight/200; //칼로리소모량 
    const km = (speed*(elapsedTime/60))/1000; //거리

    

    useEffect(() => {
        const userInterval = setInterval(() => {
            if (progress < 87) {
                setProgress((prevProgress) => prevProgress + 1);
            }
        }, 3000);

        const friendInterval = setInterval(() => {
            if (progress2 < 87) {
                setProgress2((prevProgress2) => prevProgress2 + 1);
            }
        }, 1000);

        const timeInterval = setInterval(() => {
            if (elapsedTime < timegoal) {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }
        }, 1000);

        return () => {
            clearInterval(userInterval);
            clearInterval(friendInterval);
            clearInterval(timeInterval);
        };
    }, [progress, progress2, elapsedTime]);

    const calculatedProgress = (elapsedTime / timegoal) * 87; //timegoal기준으로 진행률 계산
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    return (
        <>
            <Guageback />
            <Gauge progress={calculatedProgress} />
            <Usermini progress={calculatedProgress} src={usercharacter} />
            <Friendmini progress2={progress2} src={friendcharacter} />
            <Infocontainer>
                <Min>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                    <Mintag>MIN</Mintag>
                </Min>
                <Kal>{kal.toFixed(0)}
                    <Kaltag>KAL</Kaltag>
                </Kal>
                <Km>{km.toFixed(2)} 
                    <Kmtag>KM</Kmtag>
                </Km>
            </Infocontainer>
        </>
    );
}

export default Guage;
