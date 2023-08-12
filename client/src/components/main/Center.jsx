import styled from "styled-components";
import Top from "./Top";
import TodayRun from "./TodayRun";
import MyCh from "./MyCh";
import Bottom from "./Bottom";
import background from "../image/main_back.png"
import angleLeft from "../image/main_left.svg";
import angleRight from "../image/main_right.svg";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const GoToLeft = styled.img`
  position: absolute;
  left: 30px;
  top : 48%;
`

const GoToRight = styled.img`
  position: absolute;
  right: 30px;
  top : 48%;
`

function Center( ) {

    return (
      <Container >
        <GoToLeft src={angleLeft} />
        <GoToRight src={angleRight} />
        <Top />
        <TodayRun />
        <MyCh />
        <Bottom />
      </Container>
    )
  }
  
  export default Center;