import styled from "styled-components";
import img1 from "../components/image/login_splash.png";
import img2 from "../components/image/login_title.png";
import img3 from "../components/image/login_google.svg";
import img4 from "../components/image/login_facebook.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Splash = styled(motion.div)`
    border-radius: 5px;
    position: absolute;
    top:0;
    left : 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    justify-content: center;
    background-color: white;
`

const SplashImg = styled.img`
  margin-bottom: -100px;
  width: 100%;
  height: 70%;
  @media (max-height : 800px) {
    height: 90%;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TitleImg = styled.img`
  width: 240px;
`

const BtnBox = styled.div`
  width: 80%;
  margin-top: 170px;
`

const BtnItem = styled.div`
  position: relative;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  width: 100%;
  height: 52px;
  background-color: ${props => props.theme.mainColor};
  color : white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-size: 1rem;
  margin-top: 15px;
  img{
    position: absolute;
    left: 20px;
    width: 1.7rem;
  }
  p{
    font-weight: 800;
    margin-left: 10px;
  }
`

const splashVariants = {
  leaving: {
    opacity: 0,
    delay : 1
  }
}

function Login() {
    // 스플레쉬 화면 효과
    const [splash, isSplash] = useState(true);
    useEffect(()=>{
      setTimeout(()=> isSplash(false), 1200)
    },[])

    return (
      <>
        <AnimatePresence>
        {splash ? <Splash variants={splashVariants} exit="leaving" transition={{duration : 1.2}}> <SplashImg src={img1}/> </Splash> : null}
        </AnimatePresence>

        <Container>
          <TitleImg src={img2}/>
          <BtnBox>
              <BtnItem>
                <img src={img3}/>
                <p>Run with Google</p>
              </BtnItem>
              <BtnItem>
                <img src={img4}/>
                <p>Run with FaceBook</p>
              </BtnItem>
          </BtnBox>
        </Container>

      </>
    )
  }
  
  export default Login;
  