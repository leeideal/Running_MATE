import styled from "styled-components";
import bottom from "../../image/main_bottom.svg";
import shoes from "../../image/main_shoes.png";
import shop from "../../image/main_shop.png";
import btc from "../../image/main_btc.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom:0;
  color: #414F64;
`

const Btn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-height : 800px) {
    width: 100px;
    height: 100px;
    img{
      width: 50px;
    }
  }
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: white;
  margin-bottom: -25px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  img{
    margin-top: -18px;
  }
  h1{
    margin-top: -10px;
    font-size: 24px;
    font-weight: 600;
  }
`

const Back = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: -5px;
`
const Img = styled.img`
  width: 100%;
  height: auto;
  border-bottom-left-radius : 10px;
  border-bottom-right-radius : 10px;
`
const Real = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Btc = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 40px;
    height: auto;
  }
  h1{
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 6px;
    margin-left: 5px;
  }
`

const Day = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 8px;
  margin-top: 7px;
  margin-bottom: -12px;
  h1{
    font-weight: 600;
    margin-right: 3px;
  }
  p{
    font-size: 12px;
    color : #AEBDD1;
    margin-right: 7px;
  }
`

const Shop = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-weight: 600;
  }
`


function Bottom() {
    return (
      <Container >
        <Btn>
          <img src={shoes} />
          <h1>RUN</h1>
        </Btn>

        <Back>
            <Img src={bottom}/>

            <Real>
                {/* 사용자 정보 */}
                <Info>
                  <Btc>
                    <img src={btc} />
                    <h1>23000</h1>
                  </Btc>
                  <Day>
                    <h1>32</h1>
                    <p>days</p>
                    <h1>120</h1>
                    <p>km</p>
                  </Day>
                </Info>

                <Shop>
                  <img src={shop}/>
                  <h1>Shoe Shop</h1>
                </Shop>
            </Real>
        </Back>
      </Container>
    )
  }
  
  export default Bottom;