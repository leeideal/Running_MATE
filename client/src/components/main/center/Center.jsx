import styled from "styled-components";
import Top from "./Top";
import TodayRun from "./TodayRun";
import MyCh from "./MyCh";
import Bottom from "./Bottom";
import background from "../../image/main_back.png"
import angleLeft from "../../image/main_left.svg";
import angleRight from "../../image/main_right.svg";
import { useState } from "react";
import { isFirst } from "../../../atoms";
import { useRecoilValue } from "recoil";


const Container = styled.div`
  font-family: 'Outfit', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const GoToLeft = styled.img`
  position: absolute;
  left: 5%;
  top : 48%;
`

const GoToRight = styled.img`
  position: absolute;
  right: 5%;
  top : 48%;
`

function Center( ) {
  const checkFirst = useRecoilValue(isFirst); // true : 첫 진입, false : 이미 유저

    return (
      <Container >
        {
          checkFirst ?
            null
          :
          <>
            <GoToLeft src={angleLeft} />
            <GoToRight src={angleRight} />
          </>
        }
        <Top />
        <TodayRun />
        <MyCh />
        <Bottom />
      </Container>
    )
  }
  
  export default Center;