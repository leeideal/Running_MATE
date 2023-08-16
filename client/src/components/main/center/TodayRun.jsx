import styled from "styled-components";
import btc from "../../image/main_btc.png";
import kcal from "../../image/main_kcal.svg";
import km from "../../image/main_km.svg";


const Container = styled.div`
  width: 90%;
  margin-top:20px;
  color: #414F64;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;

`

const Record = styled.div`
  display: flex;
  align-items: flex-end;
  img{
    z-index: 2;
  }
  h1{
    font-weight: 700;
    font-size: 96px;
    margin-left: -20px;
  }
`

const Kcal = styled.div`
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
    return (
      <Container >
        <Title>
          TODAY'S RUNNING
        </Title>
        <Record>
          <img src={btc}/>
          <h1>
            673
          </h1>
        </Record>
        <Kcal>
          <img src={kcal}/>
          <div>
            <h6>410</h6>
            <p>kcal</p>
          </div>
        </Kcal>
        <Km>
          <img src={km}/>
            <div>
              <h6>7.3</h6>
              <p>km</p>
            </div>
        </Km>

      </Container>
    )
  }
  
  export default TodayRun;