import styled from "styled-components";
import angleLeft from "../image/main_left.svg";
import background from "../image/main_back2.png"
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const GoToLeft = styled.img`
  position: absolute;
  left: 30px;
  top : 48%;
`

function Right() {

    return (
      <Container>
        <GoToLeft src={angleLeft} />
      </Container>
    )
  }
  
  export default Right;