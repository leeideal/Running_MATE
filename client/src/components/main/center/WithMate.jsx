import styled from "styled-components";
import card1 from "../../image/mateCard1.png";
import card2 from "../../image/mateCard2.png";
import card3 from "../../image/mateCard3.png";
import card4 from "../../image/mateCard4.png";
import { isGabriel } from "../../../atoms";
import { useRecoilState } from "recoil";


const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color : #414F64;
`

const SmallTitle = styled.h6`
    color : #819EC7;
    font-weight: 600;
`

const BigTitle = styled.h1`
    font-weight: 600;
    font-size: 26px;
    margin-top: 20px;
`

const List = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 320px;
    overflow-y: scroll;
    @media (max-height : 860px) {
        height: 280px;
    }
    @media (max-height : 780px) {
        height: 230px;
    }
    @media (max-height : 730px) {
        height: 180px;
    }
`
const ItemCan = styled.img`
    width: 160px;
    height: 160px;
    margin: 7px;
    cursor: pointer;
    @media (max-width : 385px) {
        width: 150px;
        height: 150px;
    }
`

const Item = styled.img`
    width: 160px;
    height: 160px;
    margin: 7px;
    @media (max-width : 385px) {
        width: 150px;
        height: 150px;
    }
`


function WithMate() {
    const [ready, setReady] = useRecoilState(isGabriel);

    return (
      <Container>
        <SmallTitle>
            RUNNING WITH MATE
        </SmallTitle>
        <BigTitle>
            Choose MATE<br></br>
            Who you want to run with
        </BigTitle>
        <List>
            <ItemCan onClick={()=>setReady(true)} src={card1}/>
            <Item src={card2}/>
            <Item src={card3}/>
            <Item src={card4}/>
        </List>
      </Container>
    )
  }
  
  export default WithMate;