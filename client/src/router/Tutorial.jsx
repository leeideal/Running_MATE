import styled from "styled-components";
import background from "../components/image/tutorial.png";
import { AnimatePresence } from "framer-motion";
import Loding from "../components/Loding";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    position: relative;
`

const Container = styled.img`
  width: 100%;
  height: auto;
`

const Btn = styled.div`
    z-index: 100;
    background-color: white;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    height: 60px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:active{
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    transition: 0.2s all;
    font-family: 'Outfit', sans-serif;
    position: absolute;
    bottom : 120px;
    left: 5%;
`


function Tutorial() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    setTimeout(()=>{setIsLoading(false)}, 5000);

    return (
    <Wrapper>
        <AnimatePresence>
            {isLoading && <Loding
            initial={{ opacity : 0}}
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            />}
        </AnimatePresence>
        <Container src={background} />
        <Btn onClick={()=>navigate('/story')} >Show Story</Btn>
    </Wrapper>
    )
  }
  
  export default Tutorial;