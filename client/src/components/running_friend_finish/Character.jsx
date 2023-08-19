import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Friendimg from "../image/FriendCharacter.png";


const CharacterContainer = styled.div`
  display: flex;
  width: 246.303px;
  height: 300.821px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  float:left;
`;

const FriendCharacter = styled.img`
    display: flex;
    width: 226px;
    height: 277px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position:absolute;
    top:336px;
    left:36px;
    z-index:10;

`;

const UserCharacter = styled.img`
    width: 174px;
    height: 249px;
    flex-shrink: 0;
    position:absolute;
    left:179px;
    top:358px;
    z-index:5;
`;


function Character() {
  return (
    <CharacterContainer>
      <FriendCharacter src={Friendimg} />
      <UserCharacter src={Userimg} />
    </CharacterContainer>
  );
}

export default Character;
