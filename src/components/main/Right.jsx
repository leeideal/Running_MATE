import styled from "styled-components";
import angleLeft from "../image/main_left.svg";
import background from "../image/main_back2.png"
import { motion, AnimatePresence } from "framer-motion";
import { isBack, isMainPage } from "../../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
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

function Right() {
    const [back, setBack] = useRecoilState(isBack);
    const setPage = useSetRecoilState(isMainPage);

    const gotoleft = () => {
        setBack(true);
        setPage(1)
    }

    return (
      <Container>
        <GoToLeft onClick={gotoleft} src={angleLeft} />
      </Container>
    )
  }
  
  export default Right;