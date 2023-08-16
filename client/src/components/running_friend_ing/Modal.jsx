import Header from "../running_friend/Header";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shoeimg from "../image/shoe.png";
import coinimg from '../image/coin.png';
import { setTime, setKal, setDistance } from "../../store";
const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-shrink: 0;
    background: rgba(34, 34, 34, 0.90);
    z-index:1000;
`;

const Infocontainer = styled.div`
    flex-direction: row;
    position: absolute;
    top: 109px;
    display: flex;
    align-items: flex-start;
    justify-content: center; /* Center horizontally */
    left: 0;
    right: 0;
`;


const Min = styled.div`
    width: 114px;
    color: var(--font-font-default, #AFFF7E);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
`;


const Mintag = styled.div`
    width: 48.364px;
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
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
    color: var(--font-font-default, #AFFF7E);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
`;

const Kaltag = styled.div`
    width: 38.182px;
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
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
    color: var(--font-font-default, #AFFF7E);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */

`;

const Kmtag = styled.div`
    width: 38.182px;
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
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

const Num = styled.div`
    color: var(--secondary-secondary-default, #AFFF7E);
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);

    /* RUNNINGMATE B/34 */
    font-family: Outfit;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 117.647% */
    position: absolute;
    left: 70px;
    top: 234px;
`;
const Kms = styled.div`
    color: var(--secondary-secondary-default, #AFFF7E);

    /* RUNNINGMATE B/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.035px;
    position: relative;
    left: 45px;
    bottom: 21px;
`;

const Shoeicon = styled.img`
  width: 32.521px;
  height: 34.995px;
  flex-shrink: 0;
  position: absolute;
  left: 33px;
  top: 234px;
`;

const Coin = styled.div`
    display: flex;
    width: 121px;
    height: 39px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--secondary-secondary-default, #AFFF7E);
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);

    /* RUNNINGMATE B/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;

    position:absolute;
    left:70px;
    top:195px;
`;

const Coinimg = styled.img`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    position:absolute;
    left:33px;
    top:201px;
`;

const Text = styled.div`
    width: 340px;
    justify-content: center;
    align-items: center;
    color: var(--white, #FFF);
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 125% */
    position:absolute;
    left: 0;
    right: 0;
    left:25px;
    top:407px;
`;

const FinishContainer = styled.div`
    width: 340px;
    height: 58px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--font-font-light, #819EC7);
    position: absolute;
    bottom: 219px;
    left: 0;
    right: 0;
    cursor: pointer;
    opacity: 0.7;
    margin: auto;
`;

const Finishtext = styled.div`
    width: 293px;
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE B/24 */
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    position:relative;
    left:23px;
    top:13px;
`;

const KeeponContainer = styled.div`
    width: 340px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--primary-primary-dark-1, #00518B);
    opacity: 0.7;
    position: absolute;
    bottom: 127px;
    left: 0;
    right: 0;
    cursor: pointer;
    margin: auto;
`;

const KeeponText = styled.div`
    width: 293px;
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE B/24 */
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    position:relative;
    left:23px;
    top:13px;
`;

function Modal({onClose}){
    const speed = useSelector((state) => state.speed);
    const kal = useSelector((state) => state.kal); 
    const time = useSelector((state) => state.time);
    const distance = useSelector((state)=>state.distance);
    const coin = useSelector((state => state.coin));
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const dispatch = useDispatch();
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

   

    const handleClick = () => {
        if (!isFinished) { 
            dispatch(setDistance(distance));
            dispatch(setKal(kal));
            dispatch(setTime(time));
            setIsFinished(true);
            navigate("/running/friend/finish");
        }
    }

    const handleKeeponClick = () => {
        onClose();
    }
    
    return(
        <Container>
            <Header>Running</Header>
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
            <Shoeicon src={shoeimg} />
            <Num>{speed}
                <Kms>km/s</Kms>
            </Num>
            <Coinimg src={coinimg} />
            <Coin>{coin}</Coin>
            <Text>
            Do you want <br/>
            to finish running?
            </Text>
            <FinishContainer onClick={handleClick}>
                <Finishtext>Finish</Finishtext>
            </FinishContainer>
            <KeeponContainer onClick={handleKeeponClick}>
                <KeeponText>Keep on</KeeponText>
            </KeeponContainer>
            
        </Container>
    );
}

export default Modal;