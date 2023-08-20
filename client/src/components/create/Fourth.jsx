import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isCreateCh, isCreateNick } from "../../atoms";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import ch from "../character/main_c1.gif"
import ch2 from "../character/main_c3.gif"

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  text-align: left;
  font-size: 36px;
  color : #414F64;
  width: 100%;
  font-weight: 600;
  line-height: 1.2;
`

const Body = styled.div`
  height: 320px;
  width: 100%;
  padding-top: 40px;
`

const Item = styled(SwiperSlide)`
    width: 280px;
    height: 310px;
    border-radius: 20px;
    background-color: ${props => props.isActive ? "#78AFFF" : "white"};
    @media (max-height : 760px) {
        height: 260px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        margin-top: -30px;
        width: 220px;
        height: auto;
    }
    p{
        color: ${props => props.isActive ?  "white" : "#78AFFF"};
        font-size: 18px;
        font-weight: 500;
    }
`

const Item2 = styled(SwiperSlide)`
    width: 280px;
    height: 310px;
    border-radius: 20px;
    background-color: ${props => props.isActive ?  "white" : "#78AFFF"};
    @media (max-height : 760px) {
        height: 260px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        margin-top: -30px;
        width: 220px;
        height: auto;
    }
    p{
        color:  ${props => props.isActive ? "#78AFFF" : "white"};
        font-size: 18px;
        font-weight: 500;
    }
`

function Fourth() {
    const isNick = useRecoilValue(isCreateNick);
    const [value, modFn] = useRecoilState(isCreateCh);

    return (
    <AnimatePresence>
      <Container 
        initial={{ opacity : 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}  >
        <Title>
            Hey {isNick}! <br></br>
            Make your character!
        </Title>
        <Body>

            <Swiper 
                pagination={{
                    dynamicBullets: true,
                }} 
                spaceBetween={40}
                modules={[Autoplay, Pagination ]}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                className="mySwiper" 
            >
                <Item onClick={()=>modFn(true)} isActive={value}>
                    <img src={ch}/>
                    <p>Box boy</p>
                </Item>
                <Item2 onClick={()=>modFn(false)} isActive={value}>
                    <img src={ch2}/>
                    <p>Country boy</p>
                </Item2>

            </Swiper>
        </Body>
      </Container>
    </AnimatePresence>
    )
  }
  
  export default Fourth;