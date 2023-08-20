import { AnimatePresence, motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isCreateNick } from "../../atoms";

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
`

const Input =styled.input`
    width: 100%;
    padding: 12px;
    border: none;
    background-color: white;
    border-radius: 10px;
    margin-top: 30px;
`

function Second() {
    const setName = useSetRecoilState(isCreateNick);

    return (
    <AnimatePresence>
      <Container 
        initial={{ opacity : 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}  >
        <Title>
            Nice to meet you!<br></br>
            What's your name?
        </Title>
        <Body>
            <Input onChange={(e)=>setName(e.target.value)} placeholder="Write your nickname!"/>
        </Body>
      </Container>
    </AnimatePresence>
    )
  }
  
  export default Second;