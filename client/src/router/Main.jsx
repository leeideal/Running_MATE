import Loding from "../components/Loding";
import styled from "styled-components";
import { useState } from "react";
import Center from "../components/main/Center";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isMainPage } from "../atoms";
import Right from "../components/main/Right";
import Left from "../components/main/Left";
import background from "../components/image/main_back.png";

const Container = styled(motion.div)`
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

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

function Main() {
  const isPage = useRecoilValue(isMainPage);

  return (
    <Container >
      <AnimatePresence >
        <Box>
          {isPage === 1 ? <Center/>
            : isPage === 2 ? <Right />
            : <Left />
          }
        </Box>
      </AnimatePresence>
    </Container>
  )
}

export default Main;
