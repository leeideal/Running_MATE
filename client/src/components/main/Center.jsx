import styled from "styled-components";
import Top from "./Top";
import TodayRun from "./TodayRun";
import MyCh from "./MyCh";
import Bottom from "./Bottom";
import background from "../image/main_back.png"
import angleLeft from "../image/main_left.svg";
import angleRight from "../image/main_right.svg";
import { motion } from "framer-motion";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isBack, isMainPage } from "../../atoms";
import { useState } from "react";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const GoToLeft = styled.img`
  position: absolute;
  left: 30px;
  top : 48%;
`

const GoToRight = styled.img`
  position: absolute;
  right: 30px;
  top : 48%;
`

const page_variants = {
    entry: (back) => ({
        x: back ? -300 : 300,
        opacity: 1,
        transition : {type:"spring", damping : 1}
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: (back) => ({ x: back ? 300 : -300, opacity: 1, transition: { type:"spring", damping : 1 ,duration: 0.8 , delay : 1} })
};

function Center( props ) {
    const [back, setBack] = useRecoilState(isBack);

    // 메인 페이지 전환 Atom
    const setPage = useSetRecoilState(isMainPage);
    const gotoright = () => {
        setBack(false);
        setPage(2)
    }
    const gotoleft = () => {
        setBack(true);
        setPage(0)
    }

    return (
      <Container >
        <GoToLeft custom={back} variants={page_variants} initial="entry" animate="center" exit="exit" onClick={gotoleft} src={angleLeft} />
        <GoToRight onClick={gotoright} src={angleRight} />
        <Top />
        <TodayRun />
        <MyCh />
        <Bottom />
      </Container>
    )
  }
  
  export default Center;