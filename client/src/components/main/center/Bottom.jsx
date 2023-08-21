import styled from "styled-components";
import bottom from "../../image/main_bottom.svg";
import xbtn from "../../image/main_x.svg";
import shoes from "../../image/main_shoes.png";
import shop from "../../image/main_shop.png";
import btc from "../../image/main_btc.png";
import { AnimatePresence, motion } from "framer-motion";
import Select from "./Select";
import { useRecoilState, useRecoilValue } from "recoil";
import { isData, isFirst, isGabriel, isReady, isRun } from "../../../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Ready from "../../Ready";
import ChooseMate from "./ChooseMate";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom:0;
  color: #414F64;
  z-index: 15;
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
  background-color: ${(props) => (props.isActive === 1 ? "#FC9191"  : props.isActive === 2 ? "#78AFFF" : "white")};
  transition: 0.45s;
  
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

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 14;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
`;

const Overlay2 = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
`;



function Bottom() {
    const [clicked, setClicked] = useRecoilState(isRun);
    const checkFirst = useRecoilValue(isFirst); // true : 첫 진입, false : 이미 유저
    const userDB = useRecoilValue(isData);
    const [ready, setReady] = useRecoilState(isReady);
    const [isGa, setIsGa] = useRecoilState(isGabriel);

    const btnClick = () => {
      if(clicked === 1){
        setClicked(0)
      }else {
        setClicked(1)
      }
    }

    return (
      <>
      <Container >

        {
          checkFirst ?
          // 첫 접속
          null
          :

          // 이후 접속
          <Btn onClick={()=>btnClick()} isActive={clicked}>
            {
              clicked === 1 ? 
              <>
                <img style={{marginTop:"1px", width:"50px"}} src={xbtn}/>
              </>
              :
                clicked === 2 ?
                <>
                  <FontAwesomeIcon icon={faRotateLeft} style={{color:"white"}} size="3x"/>
                </>
                :
                <>
                  <img src={shoes} />
                  <h1>RUN</h1>
                </>
            }
          </Btn>
        }

        <Back>
            <Img src={bottom}/>

            {
              checkFirst ?
                null
              :
              <Real>
                  {/* 사용자 정보 */}
                  <Info>
                    <Btc>
                      <img src={btc} />
                      <h1>{userDB?.totalCoin}</h1>
                    </Btc>
                    <Day>
                      <h1>{userDB?.totalDay}</h1>
                      <p>days</p>
                      <h1>{userDB?.totalRun}</h1>
                      <p>km</p>
                    </Day>
                  </Info>

                  <Shop onClick={()=>setReady(true)}>
                    <img src={shop}/>
                    <h1>Shoe Shop</h1>
                  </Shop>
              </Real>

            }
        </Back>
      </Container>

      {/* select 모달창 */}
        <AnimatePresence>
          {clicked !== 0 ? 
            <Overlay 
              initial={{ opacity : 0}}
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
                <Select />
            </Overlay> 
            :
            null}
        </AnimatePresence>

      {/* 준비중 모달창 */}
      <AnimatePresence>{ready ? 
                        <Overlay2 
                            initial={{ opacity : 0}}
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <Ready />
                        </Overlay2> : null}
            </AnimatePresence>

        {/* mate 모달창 */}
        <AnimatePresence>
          {isGa ? 
            <Overlay2 
              initial={{ opacity : 0}}
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
                <ChooseMate />
            </Overlay2> 
            :
            null}
        </AnimatePresence>

      </>
    )
  }
  
  export default Bottom;