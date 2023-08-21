import styled from "styled-components";
import img from "./image/loding_c.png";
import { motion } from "framer-motion";
import { isReady } from "../atoms";
import { useRecoilState } from "recoil";


const Splash = styled(motion.div)`
    border-radius: 20px;
    position: absolute;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`

const SplashImg = styled.img`
  width: 70%;
  height: auto;
  margin-top: -50px;
`

const Title = styled.h1`
  font-family: 'Outfit', sans-serif;
  width: 80%;
  text-align: center;
  font-size: 18px;
`

const Btn = styled.div`
    margin-top: 30px;
    cursor: pointer;
    width: 65%;
    height: 50px;
    border-radius: 10px;
    background-color: #78AFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    color : white;
    font-size: 20px;
    font-family: 500;
`

const splashVariants = {
  leaving: {
    opacity: 0,
  }
}

function Ready() {
    const [ready, setReady] = useRecoilState(isReady);

  return (
    <Splash variants={splashVariants} exit="leaving" transition={{duration : 0.5}}> 
      <SplashImg src={img}/> 
      <Title>This page will be updated soon!</Title>
      <Btn onClick={()=>setReady(false)}>Ok</Btn>
    </Splash>
  )
}
  
  export default Ready;
  