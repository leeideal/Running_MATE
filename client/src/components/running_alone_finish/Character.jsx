import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";

const CharacterContainer = styled.div`
  width: 100%;
  height: 300.821px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const UserCharacter = styled.img`
  width: 174px;
  height: 249px;
  flex-shrink: 0;
  position: absolute;
  left: 50%; 
  top: 60%; 
  transform: translate(-50%, -50%); 
  z-index: 5;
`;

function Character() {
  return (
    <CharacterContainer>
      <UserCharacter src={Userimg} />
    </CharacterContainer>
  );
}

export default Character;
