import styled, {keyframes} from "styled-components";
import c1 from "../../character/main_c1.gif";
import c3 from "../../character/main_c3.gif";
import bar from "../../character/main_bar.png";
import emptybar from "../../character/main_empty_bar.png";
import level from "../../character/main_level.png";
import { useRecoilValue } from "recoil";
import { isData, isFirst } from "../../../atoms";
import { useNavigate } from "react-router-dom";

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

const textAn = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);
  }
`;

const Make = styled.h1`
  cursor: pointer;
  text-align: center;
  line-height: 1.2;
  font-size: 32px;
  font-weight: 500;
  color: white;
  p{
    font-size: 16px;
  }
  text-shadow: 2px 2px 2px rgba(255,255,255,0.6);
  margin-top: 80px;
  margin-bottom: 60px;
  animation: ${textAn} 0.7s 3.5s both;
`



function MyCh() {
  const checkFirst = useRecoilValue(isFirst); // true : 첫 진입, false : 이미 유저
  const userDB = useRecoilValue(isData);
  const naviagte = useNavigate();

    return (
      <>
      {
        checkFirst ?
        <Container >
          <Make onClick={()=>naviagte('/create')}>
              Make<br></br>
              your character!
              <p>(click Me!)</p>
          </Make>
          <Bar src={emptybar} />
        </Container>
        :
        // 이후 접속
        <Container >
          <Level src={level} />
          <Character src={userDB?.character ? c1 : c3} loop="infinite" />
          <Bar src={bar} />
        </Container>
      }
      </>
    )
  }
  
  export default MyCh;