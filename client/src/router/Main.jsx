import Loding from "../components/Loding";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Center from "../components/main/Center";
import Right from "../components/main/Right";
import Left from "../components/main/Left";
import background from "../components/image/main_back.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const Box = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`



function Main() {

  return (
    <Container 
      >
      <Box initialSlide= {1}  className="mySwiper">
        <SwiperSlide><Left/></SwiperSlide>
        <SwiperSlide><Center/></SwiperSlide>
        <SwiperSlide><Right/></SwiperSlide>
      </Box>
    </Container>
  )
}

export default Main;
