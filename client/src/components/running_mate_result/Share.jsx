import React, { useRef } from "react";
import styled from 'styled-components';
import img from '../image/insta.png';
import Insta from '../../router/InstaMate';
import { useNavigate } from 'react-router-dom';

const Icon = styled.img`
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    position:absolute;
    right:39px;
    top:444px;
    cursor: pointer;
`;

const Comment = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;

    /* RUNNINGMATE R/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;

    position:absolute;
    top:441px;
    right:65px;

`;

function Share() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // 버튼 클릭 시 페이지 이동
        navigate("/running/mate/finish/result/insta");
    };
    

    return (
        <>
            <Comment>Share my running</Comment>
            <Icon src={img} onClick={handleButtonClick} />
            {/* <Insta style={{ display: "none" }} /> */}
        </>
    );
}

export default Share;
