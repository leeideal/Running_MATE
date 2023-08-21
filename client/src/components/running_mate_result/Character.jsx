import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Friendimg from "../image/FriendCharacter.png";

const CharacterContainer = styled.div`
  display: flex;
  width: 177px;
  height: 103px;
  flex-shrink: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
  left:68px;
`;

const FriendCharacter = styled.img`
  display: block;
  width: 128px;
  height: 156px;
  position: absolute;
  top: 0;
  z-index:10;
`;

const UserCharacter = styled.img`
  width: 98px;
  height: 141px;
  position: absolute;
  left: 80px;
  top: 20px;
  z-index:5;
`;

function Character() {
  

  return (
    <CharacterContainer>
      <FriendCharacter src={Friendimg}  />
      <UserCharacter src={Userimg} />
    </CharacterContainer>
  );
}

export default Character;
