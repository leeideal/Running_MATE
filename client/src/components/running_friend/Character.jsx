import React from "react";
import styled from "styled-components";
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";

import Friendimg from "../image/FriendCharacter.png";
import Callimg from "../image/call.png";

import { isData } from "../../atoms";
import { useRecoilValue } from "recoil";

const CharacterContainer = styled.div`
  display: flex;
  width: 246.303px;
  height: 300.821px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const FriendCharacter = styled.img`
  width: 162.579px;
  height: 231.7px;
  flex-shrink: 0;
  position: absolute;
  top: 280px;
  left: 167px;
`;

const UserCharacter = styled.img`
  width: 162.579px;
  height: 231.7px;
  flex-shrink: 0;
  position: absolute;
  top: 362px;
  left: 53px;
  
`;

const Namebox = styled.div`
    width: 136px;
    height: 38px;
    flex-shrink: 0;
    background:  #61ECFF;
    opacity: 0.7px;
    color: var(--primary-primary-dark-1, #00518B);
    text-align: center;
    display: flex; 
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 232px;
    left: 203px;
    border-radius: 100px;
`;

/* 친구이름 불러와야함 */
const Friendname = styled.div`
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 
    letter-spacing: 0.03px;
    margin-left: 8px; 
`;

const Call = styled.img`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
`;

const Circle = styled.div`
  width: 238.739px;
  height: 238.739px;
  flex-shrink: 0;
  background-image: radial-gradient(50% 50.00% at 50% 50.00%, #61ECFF 0%, rgba(130, 241, 255, 0.00) 100%);
  border-radius: 50%;
  position: absolute;
  top: 297px;
  left: 52.632px;
`;

const Runningmate = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;

    /* RUNNINGMATE B/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    position: absolute;
    top: 209px;
    left: 216px;
`;


function Character() {
  const userDB = useRecoilValue(isData);
  return (
    <CharacterContainer>
      <Runningmate>RUNNING MATE</Runningmate>
      <Namebox>
        <Call src={Callimg} />
        <Friendname>Ericsson</Friendname>
      </Namebox>
      <FriendCharacter src={profile2} />

      <UserCharacter src={userDB?.character ? profile : profile2}/>
    </CharacterContainer>
  );
}

export default Character;
