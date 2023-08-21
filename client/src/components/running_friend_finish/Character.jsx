import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import Friendimg from "../image/FriendCharacter.png";
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
  float:left;
`;

const FriendCharacter = styled.img`
    display: flex;
    width: 174px;
    height: 249px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position:absolute;
    top:362px;
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
  const userDB = useRecoilValue(isData);
  return (
    <CharacterContainer>
      <FriendCharacter src={profile2} />
      <UserCharacter src={userDB?.character ? profile : profile2} />
    </CharacterContainer>
  );
}

export default Character;
