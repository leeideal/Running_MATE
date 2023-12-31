import styled from "styled-components";
import angleLeft from "../../image/main_left.svg";
import background from "../../image/main_back2.png"
import notOpen from "../../image/main_not_open.png"
import btnR from "../../image/main_r.svg"
import level from "../../character/main_level.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import backParis from "../../image/main_paris.png";
import backLondon from "../../image/main_london.png";
import backSeoul from "../../image/main_seoul.png";
import backAirport from "../../image/main_airport.png";
import { AnimatePresence, motion } from "framer-motion";
import Ready from "../../Ready";
import { useRecoilState } from "recoil";
import { isReady } from "../../../atoms";


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
`

const GoToLeft = styled.img`
  position: absolute;
  left: 5%;
  top : 48%;
`

const Card = styled(SwiperSlide)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color:white;
  background-color: white;
  background-image : url(${props => props.bgCity});
  background-repeat : no-repeat;
  background-size : cover;
`

const Head = styled.div`
  width: 90%;
  font-weight: 500;
  margin-top: 50px;
  h6{
    text-align: center;
    font-size: 18px;
  }
  h1{
    font-weight: 600;
    margin-top: 70px;
    font-size: 42px;
  }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-bottom: 80px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  h1{
    font-size: 72px;
    font-weight: 600;
    margin-right: 15px;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
  img{
    width: 52px;
  }
`

const Info = styled.div`
  margin-top: 15px;
  line-height: 1.5;
`

const StartBtn = styled.div`
  margin-top: 40px;
  border: 1.5px solid ${props => props.isColor};
  background-color: rgba(255,255,255,0.3);
  color : white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 25px;
  border-radius: 25px;
  height: 55px;
  img{
    height: 20px;
  }
  p{
    font-size: 22px;
    font-weight: 600;
  }
`

const NotBack = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
`

const NotOpen = styled.img`
  margin-bottom: 60px;
`

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;   // 다른것들보다 가장 위에 있게 함
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
`;

function Right() {
    const [ready, setReady] = useRecoilState(isReady);


    return (
      <Container>
        
        <Swiper pagination={{
          dynamicBullets: true,
        }} modules={[Autoplay, Pagination ]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}className="mySwiper" >
          <Card bgCity={backParis}>
            <GoToLeft src={angleLeft} />
            <Head>
              <h6>MATE WORLD</h6>
              <h1>You can travel to <br></br>Paris! </h1>
            </Head>
            <Footer>
              <Title>
                  <h1>Paris</h1>
                  <div>
                    <p>LV 1</p>
                    <img src={level}/>
                  </div>
              </Title>
              <Info>
                Paris is one of the most romantic city in the world. <br></br>If you want to travel Paris, join me!!
              </Info>
              <StartBtn isColor="#FFD2D2" onClick={()=>setReady(true)}>
                <img src={btnR}/>
                <p>Enter Paris</p>
              </StartBtn>
            </Footer>
          </Card>


          <Card bgCity={backLondon}>
            <Head>
              <NotBack>
                <NotOpen src={notOpen} />
              </NotBack>
                <h6>MATE WORLD</h6>
                <h1>You can travel to <br></br>London! </h1>
              </Head>
              <Footer>
                <Title>
                    <h1>London</h1>
                    <div>
                      <p>LV 2</p>
                      <img src={level}/>
                    </div>
                </Title>
                <Info>
                London is a dynamic blend of history, culture, and innovation, making it a captivating global city.

                </Info>
                <StartBtn isColor="#ACE0F9" >
                  <img src={btnR}/>
                  <p>Enter London</p>
                </StartBtn>
              </Footer>

          </Card>



          <Card bgCity={backSeoul}>
            <NotBack>
                  <NotOpen src={notOpen} />
                </NotBack>
            <Head>
                <h6>MATE WORLD</h6>
                <h1>You can travel to <br></br>Seoul! </h1>
              </Head>
              <Footer>
                <Title>
                    <h1>Seoul</h1>
                    <div>
                      <p>LV 3</p>
                      <img src={level}/>
                    </div>
                </Title>
                <Info>
                Seoul is a dynamic blend of history, culture, and innovation, making it a captivating global city.

                </Info>
                <StartBtn isColor="#FFF1EB">
                  <img src={btnR}/>
                  <p>Enter Seoul</p>
                </StartBtn>
              </Footer>
          </Card>
          
          <Card bgCity={backAirport}>
            <Head>
              <h6>MATE WORLD</h6>
              <h1>You can travel with <br></br>Social Walkers!</h1>
            </Head>
            <Footer>
              <Title>
                  <h1>Airport</h1>
              </Title>
              <Info>x
              Try on our Social Walkers and meet all the <br></br>
              users of ‘Running Mate’ at the airport!<br></br>
              It's a place where you can communicate
              </Info>
              <StartBtn isColor="#7FB3FF" onClick={()=>setReady(true)}>
                <img src={btnR}/>
                <p>Enter Airport</p>
              </StartBtn>
            </Footer>
          </Card>

        </Swiper>
        {/* 모달창 */}
        <AnimatePresence>{ready ? 
                        <Overlay 
                            initial={{ opacity : 0}}
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <Ready />
                        </Overlay> : null}
            </AnimatePresence>
      </Container>
    )
  }
  
  export default Right;