import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Mateimg from "../image/FriendCharacter.png";
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";

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

const MateCharacter = styled.img`
  width: 230px;
  height: 260px;
  flex-shrink: 0;
  position: absolute;
  top: 280px;
  left: 137px;
`;

const UserCharacter = styled.img`
  width: 162.579px;
  height: 231.7px;
  flex-shrink: 0;
  position: absolute;
  top: 362px;
  left: 53px;
`;

const Matename = styled.div`
  color: var(--white, #FFF);
  text-align: center;

  /* RUNNINGMATE B/20 */
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: 0.03px;
  position: absolute;
  top: 252px;
  left: 229px;
  display: flex; 
  align-items: center;
  justify-content: center; 

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
    top: 230px;
    left: 206px;
`;


function Character() {
  const userDB = useRecoilValue(isData);
  return (
    <CharacterContainer>
      <Runningmate>RUNNING MATE</Runningmate>
      <Matename>Gbriel</Matename>
      <MateCharacter src={Mateimg} />

      <UserCharacter src={userDB?.character ? profile : profile2} />
    </CharacterContainer>
  );
}

export default Character;
