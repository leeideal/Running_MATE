import styled from "styled-components";
import profile from "../../image/main_profile.svg";
import profile2 from "../../image/main_profile2.svg";
import { useState } from "react";
import SliderContent from "./SliderContent";
import { useRecoilValue } from "recoil";
import { isData, isFirst } from "../../../atoms";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 30px;
  @media (max-height : 800px) {
      margin-top: 15px;
  }
`

const Container2 = styled.div`
  margin-top: 30px;
  height: 45px;
`

const Box = styled.div`
  display: flex;
  align-items: center;

`

const Status = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isActive)};
  box-shadow: rgba(50, 50, 93, 0.35) 0px 1px 2px -1px inset, rgba(0, 0, 0, 0.3) 0px 6px 12px -6px inset;
  border-radius: 50%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75%;
  align-items: flex-end;
  margin-right: 5px;
`

const Name = styled.div`
  color : white;
  font-size: 14px;
`

const Profile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.35) 0px 3px 6px -1px inset, rgba(0, 0, 0, 0.3) 0px 12px 23px -12px inset;
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`



const Sidebar = styled.div`
    width: 280px;
    min-height: 85vh;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    background-color :rgb(220,225,235);
    position: fixed;
    top: 0;
    right: ${(props) => (props.isActive ? "0" : "-100%")};
    z-index: 20;
    transition: 0.5s;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SdOverlay = styled.div`
    position: fixed;
    left: 0;
    top:0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    transition: 0.8s;
    z-index: 17;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    visibility: ${(props) => (props.isActive ? "visible" : "hidden")};  
    backdrop-filter: blur(10px);
`



function Top() {
    const checkFirst = useRecoilValue(isFirst); // true : 첫 진입, false : 이미 유저

    const userDB = useRecoilValue(isData);

    const [isOpen, setIsopen] = useState(false);

    return (
      <>
        {/* 네브바 */}
        {
          checkFirst ? 
            <Container2></Container2>
          :
          <>
            <Container >
            <Box>
                <Info>
                  <Status isActive={userDB?.status === 0 ? "#78AFFF" : userDB?.status === 1 ? "#AFFF7E" : "#B7C7DF"}></Status>
                  <Name>Hi! {userDB?.nickName}</Name>
                </Info>
                <Profile onClick={()=>setIsopen(prev => !prev)}>
                  <ProfileImg src={userDB?.character ? profile : profile2}/>
                </Profile>
              </Box>
            </Container>

            {/* 슬라이더 */}
            <Sidebar isActive = {isOpen}>
              <SliderContent/>
            </Sidebar>
            <SdOverlay isActive = {isOpen} onClick={()=>setIsopen(prev => !prev)}></SdOverlay>
          </>
        }
        
      </>
    )
  }
  
  export default Top;