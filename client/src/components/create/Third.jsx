import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { isCreateNick, isCreatePhone } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

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

function Third() {
    const isNick = useRecoilValue(isCreateNick);
    const setPhone = useSetRecoilState(isCreatePhone);

    return (
    <AnimatePresence>
      <Container 
        initial={{ opacity : 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}  >
        <Title>
            Hi {isNick}!<br></br>
            What's your number?
        </Title>
        <Body>
            <Input onChange={(e)=>setPhone(e.target.value)} placeholder="ex)01012345678"/>
        </Body>
      </Container>
    </AnimatePresence>
    )
  }
  
  export default Third;