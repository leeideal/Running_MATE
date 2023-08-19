import React, { useRef } from "react";
import styled from 'styled-components';
import html2canvas from 'html2canvas'; // HTML2Canvas 라이브러리 추가

import Userimg from '../components/image/UserCharacter.png';
import Friendimg from '../components/image/FriendCharacter.png';
import Location from '../components/running_friend_insta/Location';
import Date from '../components/running_friend_insta/Date';
import Name from '../components/running_friend_insta/Name';
import RunningInfo from "../components/running_friend_insta/RunningInfo";
import store from '../store'; 
import { Provider } from 'react-redux';

const Container = styled.div`
    width: 395px;
    height: 635px;
    background: #94BDFD;
    display: flex;
    justify-content: center;

    position: absolute;
    bottom: 129px;
`;

const Friend = styled.img`
    width: 276px;
    height: 338px;
    flex-shrink: 0;
    position: absolute;
    bottom: 140px;
    right: 135px;
    z-index: 10;
`;

const User = styled.img`
    width: 212px;
    height: 306px;
    flex-shrink: 0;
    position: absolute;
    bottom: 140px;
    right: 30px;
`;

const Rm = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);

    /* RUNNINGMATE B/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;
    position: absolute;
    top: 40px;
    left: 225px;
`;

const SaveButton = styled.button`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #94BDFD;
    border: none;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
`;

function Insta() {
    const containerRef = useRef(null);

    const handleSaveImage = () => {
        html2canvas(containerRef.current).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'insta_image.png';
            link.click();
        });
    };

    return (
        <Provider store={store}>
            <Container ref={containerRef}>
                <Rm>RUNNINGMATE</Rm>
                <Friend src={Friendimg}/>
                <User src={Userimg} />
                <Location />
                <Date />
                <Name />
                <RunningInfo />
            </Container>
            <SaveButton onClick={handleSaveImage}>Save as Image</SaveButton>
        </Provider>
    );
}

export default Insta;
