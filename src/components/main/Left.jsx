import styled from "styled-components";
import angleRight from "../image/main_right.svg";
import background from "../image/main_back2.png"
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isBack, isMainPage } from "../../atoms";

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

const GoToRight = styled.img`
  position: absolute;
  right: 30px;
  top : 48%;
`

const page_variants = {
    entry: (back) => ({
        x: back ? -30 : 30,
        opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (back) => ({ x: back ? 30 : -30, opacity: 1, transition: { duration: 1 } })
};

function Left() {
    const [back, setBack] = useRecoilState(isBack);

    // 메인 페이지 전환 Atom
    const setPage = useSetRecoilState(isMainPage);
    const gotoright = () => {
        setBack(false);
        setPage(1)
    }

    return (
      <Container >
        <GoToRight onClick={gotoright} src={angleRight} />
      </Container>
    )
  }
  
  export default Left;