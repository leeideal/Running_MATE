import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../image/completion_popup.png';
import Modal from './Modal';

const Blur = styled.div`
    width: 391px;
    height: 844px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(10px);
    z-index:990;
`; 

const PopupContainer = styled.div`
    position: fixed;
    top: 19%;
    left: 13%;
    background-color: #4D77B6;
    border-radius: 20px;
    z-index: 999;
    width: 288px;
    height: 437.279px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    width: 251px;
    height: 73px;
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE B/28 */
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */
`;

const Title = styled.div`
    color: var(--primary-primary-default-3, #C9DFFF);

    /* RUNNINGMATE B/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
`;

const Countdown = styled.div`
    color: var(--secondary-secondary-default, #AFFF7E);
    text-align: center;

    /* RUNNINGMATE B/28 */
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */
    position:absolute;
    top:12.5px;
    left:243px;
    
`;

const Img = styled.img`
    width: 215.992px;
    height: 215.992px;
    flex-shrink: 0;
    z-index:30;
`;

const Eclipse = styled.img`
    width: 200.555px;
    height: 199.042px;
    transform: rotate(-88.838deg);
    flex-shrink: 0;
    background: radial-gradient(
        50% 50.00% at 50% 50.00%, 
        rgba(255, 249, 200, 0.60) 0%, 
        rgba(255, 249, 200, 0.19) 73.44%, 
        rgba(255, 244, 144, 0.00) 100%
    );
    filter: blur(2px);
    border-radius: 50%;
    position: absolute;
    right:6px;
    z-index:10;
    
`;

const Popup = ({ message, onClose }) => {
    const [countdown, setCountdown] = useState(3);
    const [isPopupOpen, setIsPopupOpen] = useState(true);


    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const countdownTimeout = setTimeout(() => {
            clearInterval(countdownInterval);
            setIsPopupOpen(false); 
        }, 3000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(countdownTimeout);
        };
    }, []);


    return (
        <>
        
        {isPopupOpen && (
            <Blur>
            <PopupContainer>
                <Title>Completion</Title>
                <Text>{message}</Text>
                <span style={{ position: 'relative' }}>
                    <Img src={img} />
                    <Eclipse />
                </span>
                <Countdown>{countdown}</Countdown>
            </PopupContainer>
            </Blur>
        )}
    
        {!isPopupOpen && <Modal onClose={onClose} />}
        </>
    );
};

export default Popup;
