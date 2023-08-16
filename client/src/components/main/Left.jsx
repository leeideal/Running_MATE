import styled from "styled-components";
import angleRight from "../image/main_right.svg";
import background from "../image/main_back2.png"
import { isBack, isMainPage } from "../../atoms";

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

const GoToRight = styled.img`
  position: absolute;
  right: 5%;
  top : 48%;
`


function Left() {

    return (
      <Container >
        <GoToRight src={angleRight} />
      </Container>
    )
  }
  
  export default Left;