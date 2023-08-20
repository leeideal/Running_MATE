import React from "react";
import styled from "styled-components";
import Userimg from "../image/UserCharacter.png";

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
  return (
    <Container>
      <UserCharacter src={Userimg} />
    </Container>
  );
}

export default Character;
