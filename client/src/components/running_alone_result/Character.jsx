import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";
import { isData } from "../../atoms";
import { useRecoilValue } from "recoil";

const CharacterContainer = styled.div`
  display: flex;
  width: 340px;
  height: 103px;
  flex-shrink: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
`;


const UserCharacter = styled.img`
  width: 98px;
  height: 141px;
  position: absolute;
  left: 110px;
  top: 20px;
  z-index:5;
`;

function Character() {
  const userDB = useRecoilValue(isData);
  return (
    
    <CharacterContainer>
      <UserCharacter src={userDB?.character ? profile : profile2} />
    </CharacterContainer>
  );
}

export default Character;
