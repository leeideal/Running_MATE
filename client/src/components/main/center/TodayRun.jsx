import styled from "styled-components";
import btc from "../../image/main_btc.png";
import kcal from "../../image/main_kcal.svg";
import km from "../../image/main_km.svg";
import { useRecoilValue } from "recoil";
import { isData, isFirst } from "../../../atoms";


const Container = styled.div`
  width: 90%;
  margin-top:20px;
  color: #414F64;
  @media (max-height : 800px) {
      margin-top: 10px;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  @media (max-height : 760px) {
    font-size: 16px;
  }
`

const Record = styled.div`
  display: flex;
  align-items: flex-end;
  img{
    @media (max-height : 800px) {
      width: 50px;
    }
    @media (max-height : 760px) {
      width: 35px;
    }
    z-index: 2;
  }
  h1{
    @media (max-height : 850px) {
      font-size: 90px;
    }
    @media (max-height : 800px) {
      font-size: 78px;
    }
    @media (max-height : 760px) {
      font-size: 58px;
      margin-left: -10px;
    }
    font-weight: 700;
    font-size: 100px;
    margin-left: -20px;
  }
`

const Kcal = styled.div`
  @media (max-height : 760px) {
    margin-top:0px;
  }  
  margin-top:10px;
  display: flex;
  align-items: center;
  div{
    margin-left: 15px;
    display: flex;
    align-items: flex-end;
    color: #AFFF7E;
    h6{
      font-size: 18px;
      font-weight: 600;
    }
    p{
      margin-left: 5px;
      font-size: 12px;
    }
  }
`

const Km = styled.div`
  display: flex;
  align-items: center;
  div{
    margin-left: 15px;
    display: flex;
    align-items: flex-end;
    color: #FFD2D2;
    h6{
      font-size: 18px;
      font-weight: 600;
    }
    p{
      margin-left: 5px;
      font-size: 12px;
    }
  }
`

function TodayRun() {

  const checkFirst = useRecoilValue(isFirst); // true : 첫 진입, false : 이미 유저
  const userDB = useRecoilValue(isData);

    return (
      <Container >
        <Title>
          TODAY'S RUNNING
        </Title>
        <Record>
          <img src={btc}/>
          <h1>
            {checkFirst ? "0" : userDB?.todayCoin}
          </h1>
        </Record>
        <Kcal>
          <img src={kcal}/>
          <div>
            <h6>{checkFirst ? "0" : userDB?.todayKcal}</h6>
            <p>kcal</p>
          </div>
        </Kcal>
        <Km>
          <img src={km}/>
            <div>
              <h6>{checkFirst ? "0" : userDB?.todayRun}</h6>
              <p>km</p>
            </div>
        </Km>

      </Container>
    )
  }
  
  export default TodayRun;