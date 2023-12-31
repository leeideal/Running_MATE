import styled from "styled-components";
import angleRight from "../../image/main_right.svg";
import background from "../../image/main_back2.png"
import { isBack, isMainPage } from "../../../atoms";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
  font-family: 'Outfit', sans-serif;
  font-size: 32px;
  color : white;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
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
        Running data <br></br> doesn't exist yet!
      </Container>
    )
  }
  
  export default Left;