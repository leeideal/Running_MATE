import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import running_back2 from "../image/running_back2.png";


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
  box-shadow: 0px 8px 10px 0px rgba(255, 255, 255, 0.60) inset,
    0px -8px 10px 0px rgba(255, 255, 255, 0.60) inset,
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
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

const CountdownText = styled.span`
    display: flex;
    width: 112px;
    height: 228px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--font-font-default, #414F64);
    text-align: center;
    text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
    font-family: Outfit;
    font-size: 150px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 26.667% */
    position: absolute;
    bottom: 67px;
`;

const Countdown = ({ count }) => {
  return <CountdownText>{count}</CountdownText>;
};

function Start( { onBackgroundChange } ) {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);

  useEffect(() => {
    if (count > 0 && isCountdownVisible) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (count === 0) {
      //카운트다운 끝나면 새로운 페이지로 이동
      navigate("../running/mate/ing"); 
    }
  }, [count, navigate, isCountdownVisible]);

  const handleStartClick = () => {
    setIsCountdownVisible(true);
    onBackgroundChange(running_back2);
  };

  return (
    <>
      {isCountdownVisible ? (
        <Countdown count={count} />
      ) : (
        <Circle onClick={handleStartClick}>START</Circle>
      )}
    </>
  );
}

export default Start;
