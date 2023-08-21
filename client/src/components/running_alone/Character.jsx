import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";
import profile from "../image/create_ch1.png";
import profile2 from "../image/create_ch2.png";
import { isData } from "../../atoms";
import { useRecoilValue } from "recoil";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserCharacter = styled.img`
  width: 190px;
  height: 270px;
  flex-shrink: 0;
  justify-content:center;
  align-content:center;
`;


function Character() {
  const userDB = useRecoilValue(isData);
  return (
    <Container>
      <UserCharacter src={userDB?.character ? profile : profile2} />
    </Container>
  );
}

export default Character;
