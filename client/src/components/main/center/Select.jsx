import styled from "styled-components";
import own from "../../image/select_own.png"
import mate from "../../image/select_mate.png"
import friend from "../../image/select_friend.png"
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isRun } from "../../../atoms";
import WithMate from "./WithMate";
import WithFriend from "./WithFriend";


const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-height : 790px) {
    padding-bottom: 150px;
  }
`

const Item = styled(motion.div)`
    background-color: ${(props) => (props.bgColor)};
    color : ${(props) => (props.txColor)};
    width: 90%;
    height: 100px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    display: flex;
    z-index: 100;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
`

const ImgBox = styled.div`
    width: 140px;
`

const Img = styled.img`
    
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-evenly;
    font-weight: 600;
    h1{
        font-size: 26px;
    }
`

const Modal = styled.div`
    width: 100%;
    height: 80vh;
    background-color :rgb(220,225,235);
    position: fixed;
    left: 0;
    bottom: ${(props) => (props.isActive === 2 ? "0" : "-100%")};
    z-index: 100;
    transition: 0.6s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`

const Variants = {
    start: {
      opactiy: 0,
      scale: 0.5
    },
    end : {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.4,   
        staggerChildren: 0.2,   
      },
    }
}

const itemVariants = {
    start : {
      opacity: 0,
      y : 10      // 아래에 위치시킴 (Motion의 특징)
    },
    end : {
      opacity: 1,
      y : 0
    }
}



function Select() {
    const [select, setSelect] = useState(true); // true: mate, false: friend
    const [clicked, setClicked] = useRecoilState(isRun);

    const isClick = (e) => {
        if(e.currentTarget.id === "1"){
            setSelect(true)
        }else{
            setSelect(false)
        }
        setClicked(2);
    }

    return (
        <>
            <Container variants={Variants} initial="start" animate="end">
                <Item variants={itemVariants} bgColor="white" txColor="#414F64">
                    <ImgBox>
                        <Img src={own}/>
                    </ImgBox>
                    <Text>
                        <h6>
                            Running
                        </h6>
                        <h1>
                            my own way
                        </h1>
                    </Text>
                </Item>
                <Item onClick={(e)=>isClick(e)} id="1" variants={itemVariants} bgColor="#78AFFF" txColor="white">
                    <ImgBox>
                        <Img src={mate}/>
                    </ImgBox>
                    <Text>
                        <h6>
                            Running
                        </h6>
                        <h1>
                            with a mate
                        </h1>
                    </Text>
                </Item>
                <Item onClick={(e)=>isClick(e)} id="2" variants={itemVariants} bgColor="white" txColor="#414F64">
                    <ImgBox>
                        <Img src={friend}/>
                    </ImgBox>
                    <Text>
                        <h6>
                            Running
                        </h6>
                        <h1>
                            with a friend
                        </h1>
                    </Text>
                </Item>
            </Container>

            {/* 모달 */}
            <Modal isActive={clicked}>
                {
                    select ?
                    /* mate랑 뛰기 */
                    <WithMate />
                    :
                    /* friend랑 뛰기 */
                    <WithFriend />
                }
            </Modal>
        </>
    )
  }
  
  export default Select;