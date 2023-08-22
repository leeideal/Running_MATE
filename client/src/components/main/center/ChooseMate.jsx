import styled from "styled-components";
import chImg from "../../character/main_c2.gif";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { isGabriel } from "../../../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Splash = styled(motion.div)`
    border-radius: 20px;
    position: absolute;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFCEF1;
`

const XMark = styled(FontAwesomeIcon)`
    font-size: 20px;
    position: absolute;
    top:20px;
    right: 20px;
    cursor: pointer;
    color:#414F64;
`

const SplashImg = styled.img`
  width: 90%;
  height: auto;
  margin-top: 20px;
`

const Title = styled.div`
  font-family: 'Outfit', sans-serif;
  width: 80%;
  text-align: center;
  h6{
    color:#819EC7;
    font-weight: 500;
    margin-bottom: 20px;
  }
  h1{
    font-size: 34px;
    font-weight: 600;
    color:#414F64;
  }
`

const Btn = styled.div`
    margin-top: 30px;
    cursor: pointer;
    width: 65%;
    height: 55px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    color : white;
    font-size: 28px;
    font-family: 800;
    border: 5px solid rgba(255,255,255,0.5);
`

const splashVariants = {
  leaving: {
    opacity: 0,
  }
}

function ChooseMate() {
    const [ready, setReady] = useRecoilState(isGabriel);
    const navigate = useNavigate();

  return (
    <Splash variants={splashVariants} exit="leaving" transition={{duration : 0.5}}> 
    <XMark onClick = {()=>setReady(false)} icon={faX} />
        <Title>
            <h6>RUNNING MATE</h6>
            <h1>Hi! I'm Gabriel <br></br>
                Run with me!</h1>
        </Title>
        <SplashImg src={chImg}/> 
        <Btn onClick={()=>navigate('/running/friend/music')} >Let's Go!</Btn>
    </Splash>
  )
}
  
  export default ChooseMate;
  