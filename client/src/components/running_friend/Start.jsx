import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Circle = styled.div`
    width: 163px;
    height: 163px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    bottom: 97px;
    background-color: #AFFF7E;
    box-shadow: 0px 8px 10px 0px rgba(255, 255, 255, 0.60) inset, 0px -8px 10px 0px rgba(255, 255, 255, 0.60) inset, 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.40));
    color: var(--primary-primary-dark-1, #00518B);
    text-align: center;
    /* RUNNINGMATE B/34 */
    font-family: Outfit;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 117.647% */
`;

function Start() {
    const navigate = useNavigate();
    return (
        <Circle onClick={() => {
            navigate(""); {/* start누르면 어디로 이동할지 미정 */}
        }}>START
    </Circle>
  );
}

export default Start;
