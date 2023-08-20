import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { isCreateCh, isCreateNick } from "../../atoms";
import { useRecoilValue } from "recoil";
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
  text-align: center;
  font-size: 36px;
  color : #414F64;
  width: 100%;
  font-weight: 600;
  line-height: 1.2;
`

const Body = styled.div`
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
        width: 260px;
        height: auto;
    }
    p{
        margin-top: 30px;
        color: #414F64;
        font-size: 20px;
        font-weight: 600;
    }
`

function Finish() {
    const isNick = useRecoilValue(isCreateNick);
    const isCh = useRecoilValue(isCreateCh);

    return (
    <AnimatePresence>
      <Container 
        initial={{ opacity : 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}  >
        <Title>
            Congratulations! <br></br>
            Ready to run?
        </Title>
        <Body>
            <p>{isNick}</p>
            <img src={isCh ? ch : ch2}/>
        </Body>
      </Container>
    </AnimatePresence>
    )
  }
  
  export default Finish;