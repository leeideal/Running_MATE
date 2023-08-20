import styled from "styled-components";
import c1 from "../../character/main_c1.gif";
import c2 from "../../character/main_c2.gif";
import c3 from "../../character/main_c3.gif";
import bar from "../../character/main_bar.png";
import level from "../../character/main_level.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Level = styled.img`
  @media (max-height : 800px) {
    width: 60px;
  }
  @media (max-height : 760px) {
    width: 50px;
  }
  width: 70px;
  height: auto;
  margin-bottom: -20px;
`

const Character = styled.img`
  @media (max-height : 896px) {
    height: 80%;
  }
  @media (max-height : 850px) {
    height: 70%;
  }
  @media (max-height : 760px) {
    height: 60%;
  }
  margin-bottom: -80px;
  height: 90%;
  z-index: 2;
`

const Bar = styled.img`
  
`

function MyCh() {
    return (
      <Container >
        <Level src={level} />
        <Character src={c1} loop="infinite" />
        <Bar src={bar} />
      </Container>
    )
  }
  
  export default MyCh;