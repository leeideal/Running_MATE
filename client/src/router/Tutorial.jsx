import styled from "styled-components";
import background from "../components/image/create_back.png";


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



function Tutorial() {

    return (
      <Container >
        튜토리얼
      </Container>
    )
  }
  
  export default Tutorial;