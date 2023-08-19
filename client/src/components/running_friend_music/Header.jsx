import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import img from "../image/back.png";

const HeaderContainer = styled.div`
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    display: flex;
    width: 390px;
    padding: 12px 25px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const BackButton = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
`;

const Title = styled.div`
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE B/20 */
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: 0.03px;
    positionLrelative;
    
`;

const Blank = styled.div`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

const Done = styled.div`
  width: 85px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white, #FFF);
  text-align:center;s
 
`;
const Donetxt = styled.div`
  width: 73.25px;
  color: var(--font-font-default, #414F64);
  text-align: center;

  /* RUNNINGMATE B/24 */
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  position:relative;
  left:5.8px;
  `;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton
        src={img}
        onClick={() => {
          navigate("/");
        }}
      />
      <Title>RUNNING</Title>
      <Blank />
      <Done onClick={() => {
        navigate("/running/friend");
      }}><Donetxt>done</Donetxt></Done>
    </HeaderContainer>
  );
};

export default Header;
