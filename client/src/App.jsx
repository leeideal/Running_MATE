import { useEffect, useState} from "react";
import { db } from "./firebase";
import Router from "./Router";
import { createGlobalStyle, styled } from "styled-components";
import NexmoClient from 'nexmo-client';
import { useRecoilState, useRecoilValue } from "recoil";
import { isAnswered, isCall, isData } from "./atoms";
import { isCalling } from "./atoms";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Outfit', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
  }
  a{
      text-decoration: none;
      color:inherit;  // 색을 부모로부터 상속 받음
  }
`

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EAEAEA;
`

const Container = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
  max-height: 930px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`

function App() {
  const callJWT = import.meta.env.VITE_APP_CALL_JWT;
  const [letCall, letCallFn] = useRecoilState(isCall);
  const [getCall, getCallFn] = useRecoilState(isCalling);
  const [answer, setAnswer] = useRecoilState(isAnswered);
  const userDB = useRecoilValue(isData);
  new NexmoClient({ debug: true })
            .createSession(userDB?.inAppToken ? userDB.inAppToken : callJWT)
            .then(app => {
                // 전화 걸기
                if((letCall) && (getCall === 1)){
                  console.log("Calling...");
                  app.callServer("bob", "app");
                }
          
                  app.on("member:call", (member, call) => {
                    
                    if(getCall === 2){
                      console.log("Hanging up...");
                      call.hangUp();
                      //getCallFn(0);
                    }
                  });

                  app.on("call:status:changed", call => {
                    console.log("Call 데이터 변환 중!!")
                    console.log("call 데이터 : ",call.status)
                    if((call.status === "answered") && answer === 0){
                      setAnswer(1);
                    }
                  });
                
            })
            .catch(console.error);
  
  useEffect(() => {
  });
  

  return (
    <Body>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </Body>
    
  );
}

export default App;
