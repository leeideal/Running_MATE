import styled from "styled-components";
import img1 from "../components/image/login_splash.png";
import img2 from "../components/image/login_title.png";
import img3 from "../components/image/login_google.svg";
import img4 from "../components/image/login_facebook.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

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
    z-index: 10;
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

const BtnItem = styled.button`
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
  border: none;
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

    const navigate = useNavigate();
  
    // 소셜로그인
    const onSocialClick = async (event) => {
      const button = event.currentTarget;
      const provider = new GoogleAuthProvider();
      try{
          if(button.name === "google"){
            signInWithPopup(auth, provider)
            .then((result) => {
              
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential =  GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              localStorage.setItem('userInfo', JSON.stringify({
                "token": user.accessToken, 
                "name": user.displayName,
                "uid" : user.uid
              }))
              navigate("/");
            }).catch((error) => {
              //console.log(error)
              //const credential = GoogleAuthProvider.credentialFromError(error);
              //console.log(credential)
              
            });
              
          }else if(button.name === "facebook"){
            signInWithPopup(auth, provider)
            .then((result) => {
              
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential =  FacebookAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              localStorage.setItem('userInfo', JSON.stringify({
                "token": user.accessToken, 
                "name": user.displayName,
                "uid" : user.uid
              }))
              navigate("/");
            }).catch((error) => {
              //console.log(error)
              //const credential = GoogleAuthProvider.credentialFromError(error);
              //console.log(credential)
              
            });
          }
      }catch (error) {
        console.log(error)
          window.alert("문제가 발생하였습니다. 다시확인해주시기 바랍니다.");
      }
  }

    return (
      <>
        <AnimatePresence>
        {splash ? <Splash variants={splashVariants} exit="leaving" transition={{duration : 1.2}}> <SplashImg src={img1}/> </Splash> : null}
        </AnimatePresence>

        <Container>
          <TitleImg src={img2}/>
          <BtnBox>
              <BtnItem onClick={onSocialClick} name="google">
                <img src={img3}/>
                <p>Run with Google</p>
              </BtnItem>
              <BtnItem onClick={onSocialClick}  name="facebook">
                <img src={img4}/>
                <p>Run with FaceBook</p>
              </BtnItem>
          </BtnBox>
        </Container>

      </>
    )
  }
  
  export default Login;