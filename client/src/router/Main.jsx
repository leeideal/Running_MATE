import Loding from "../components/Loding";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Right from "../components/main/right/Right";
import Left from "../components/main/left/Left";
import background from "../components/image/main_back.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Center from "../components/main/center/Center";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { isData, isFirst } from "../atoms";
import { AnimatePresence } from "framer-motion";
import { db } from "../firebase";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
`

const Box = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`



function Main() {
  const [checkFirst, setCheckFirst] = useRecoilState(isFirst);
  const [isLoading, setIsLoading] = useState(true);
  const [userDB, setUserDB] = useRecoilState(isData); // 유저 정보

  const getUsetDB = async() => {
    const uid = JSON.parse(localStorage.getItem('userInfo'))
    const docRef = doc(db, "userDB", uid.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCheckFirst(false);
      setUserDB(docSnap.data())
    } else {
      setCheckFirst(true);
      console.log("No such document!");
    }
  }

  setTimeout(()=>{setIsLoading(false)}, 3000);

  useEffect(()=>{
    getUsetDB();
  },[])

  return (
    <Container 
      >
        <AnimatePresence>
        {isLoading && <Loding
          initial={{ opacity : 0}}
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
        />}
        </AnimatePresence>


      {checkFirst ? 
        // 첫 접속 시에
        <Box className="mySwiper">
          <SwiperSlide><Center/></SwiperSlide>
        </Box>
        :
        // 이후 접속 시에
        <Box initialSlide= {1}  className="mySwiper">
          <SwiperSlide><Left/></SwiperSlide>
          <SwiperSlide><Center/></SwiperSlide>
          <SwiperSlide><Right/></SwiperSlide>
        </Box>
      }
    </Container>
  )
}

export default Main;
