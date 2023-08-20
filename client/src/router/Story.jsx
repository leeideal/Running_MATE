import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import img_00 from "../components/image/story1.png";
import img_01 from "../components/image/story2.png";
import img_02 from "../components/image/story3.png";
import img_03 from "../components/image/story4.png";
import img_04 from "../components/image/story5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Container = styled.div`

  font-family: 'Outfit', sans-serif;
`

const Content = styled.section`
    width: 100%;
    background-color: black;
`;

const downBtnFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const DownBtn = styled.div`
    position: absolute;
    top:220px;
    left: 0;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        margin-bottom: -15vh;
    }
    p {
        font-size: 1.2rem;
    }
    i {
        height: 34px;
    }
    margin-top: 15vh;
    margin-bottom: -20vh;
    animation: ${downBtnFadeIn} 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s both;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  margin-bottom: -15vh;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  will-change: opacity;
`;

const Img = styled.img`
    max-height: 100vh;
`;

const Text = styled.div`
  position: relative;
`;

const Step = styled.div`
  margin-bottom: 70vh;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  line-height: 1.5;
  p {
    font-size: 1.2rem;
    color: black;
    font-weight: 500;
  }
`;


const GoToMain = styled.div`
  background-color: black;
`

function Story() {
    const naviagte = useNavigate();
    const [stepItem, setStepItem] = useState([]);
    const [graphicItem, setGraphicItem] = useState([]);
    let currentItem = graphicItem[0]; // 현재 활성화
    let checkIdx;
  
    const io = new IntersectionObserver((entries, observer) => {
      checkIdx = entries[0].target.dataset.index;
      checkIdx = checkIdx * 1; // 문자열 to 숫자
    });
  
    for (let i = 0; i < stepItem.length; i++) {
      stepItem[i].dataset.index = i;
      graphicItem[i].dataset.index = i;
      io.observe(stepItem[i]);
    }
  
    useEffect(() => {
      window.scrollTo(0,0);
      setStepItem(document.querySelectorAll('.step'));
      setGraphicItem(document.querySelectorAll('.item'));
  
      for (let i = 0; i < stepItem.length; i++) {
        stepItem[i].dataset.index = i;
        graphicItem[i].dataset.index = i;
  
        io.observe(stepItem[i]);
      }
    }, []);
  
    // 활성화
    function action() {
      currentItem.style.opacity = 1;
    }
  
    // 비활성화
    function stopAction() {
      currentItem.style.opacity = 0;
    }
  
    window.addEventListener('scroll', () => {
      let step;
      let rectInfo;
      for (let i = checkIdx - 1; i < checkIdx + 2; i++) {
        step = stepItem[i];
        if (!step) continue;
        rectInfo = step.getBoundingClientRect();
        if (
          rectInfo.top > window.innerHeight * 0.1 &&
          rectInfo.top < window.innerHeight * 0.8
        ) {
          stopAction();
          currentItem = graphicItem[step.dataset.index];
          action();
        }
      }
    });

    return (
      <Container >
        <DownBtn>
                <p>Scroll</p>
                <FontAwesomeIcon icon={faAnglesDown} />
            </DownBtn>
        <Content>
            <Sticky>
            <Item className="item">
                <Img src={img_00} />
            </Item>
            <Item  className="item">
                <Img src={img_01} />
            </Item>
            <Item className="item">
                <Img src={img_02} />
            </Item>
            <Item className="item">
                <Img src={img_03} />
            </Item>
            <Item className="item">
                <Img src={img_04} />
            </Item>
            </Sticky>
        <Text>
          <Step style={{marginTop : "160px"}} className="step">
            <p>
                The story begins... <br></br>
              when I was eight years old
            </p>
          </Step>
          <Step className="step">
            <p>
            Walking down the street...
            </p>
          </Step>
          <Step className="step">
            <p>
            I come across a mysterious <br></br>
            shoe store.<br></br>
            While I was looking at the shoes,

            </p>
          </Step>
          <Step className="step">
            <p>
            I met an old man who owns the shoe store. The old man gave me a shoe telling me...<br></br>
            “Explore the world”

            </p>
          </Step>
          <Step style={{cursor:"pointer" }}  className="step" onClick={()=>naviagte('/')}>
            <p>
                It's Time To Run!<br></br>
                Let' Go!<br></br>
            (Please Click Me)
            </p>
          </Step>
        </Text>
        <GoToMain>
          s
        </GoToMain>
        
      </Content>
      </Container>
    )
  }
  
  export default Story;