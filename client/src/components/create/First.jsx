import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import ch from "../image/create_ch1.png"
import ch2 from "../image/create_ch2.png"

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
`

const ChImg = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: -100px;
  margin-right: -10px;
`

const ChImg2 = styled.img`
  width: 160px;
  height: auto;
  margin-left: -10px;
`

function First() {

    return (
      <AnimatePresence>
        <Container 
          initial={{ opacity : 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -100 }}  >
        <Title>
            Make<br></br>
            your character!
        </Title>
        <Body>
          <ChImg src = {ch}/>
          <ChImg2 src={ch2} />
        </Body>
      </Container>
    </AnimatePresence>
    )
  }
  
  export default First;