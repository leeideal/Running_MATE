import styled from "styled-components";
import img from "../components/image/loding_c.png";
import gif from "../components/image/loding_s.gif";
import { motion } from "framer-motion";


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
  width: 70%;
  height: auto;
  margin-top: -50px;
`

const Title = styled.h1`
  font-family: 'Outfit', sans-serif;
  width: 70%;
  text-align: center;
  font-size: 18px;
`

const SplahGif = styled.img`
  width : 15%;
  background-color: white;
  margin-top: 30px;
`

const splashVariants = {
  leaving: {
    opacity: 0,
  }
}

const list = [
  "Go to a new city with your new shoes",
  "This year, the shoe grandpa has been dealing with shoes for 50 years",
  "Did you know that sneakers were a symbol of youth culture in the 1970s?",
  "Did you know that Gabriel actually doesn't like baguettes?",
  "My shoes size is 260",
  "Run the amazing cities that appear below your feet",
  "We just felt like Running!"
]

function Loding() {

  return (
    <Splash variants={splashVariants} exit="leaving" transition={{duration : 0.5}}> 
      <SplashImg src={img}/> 
      <Title>{list[Math.floor(Math.random() * 7)]}</Title>
      <SplahGif src={gif}/>
    </Splash>
  )
}
  
  export default Loding;
  