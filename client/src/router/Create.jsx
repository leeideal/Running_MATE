import styled from "styled-components";
import background from "../components/image/create_back.png";
import arrow from "../components/image/create_back_arrow.svg";
import { isCreate, isCreateCh, isCreateNick, isCreatePhone } from "../atoms";
import { useRecoilState, useRecoilValue} from "recoil";
import { AnimatePresence, motion } from "framer-motion";
import First from "../components/create/First";
import Second from "../components/create/Second";
import Third from "../components/create/Third";
import Fourth from "../components/create/Fourth";
import Finish from "../components/create/Finish";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { db } from "../firebase";


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  background-image : url(${background});
  background-repeat : no-repeat;
  background-size : cover;
  font-family: 'Outfit', sans-serif;
`

const Title = styled.div`
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    h1{
        position: relative;
        width: 100%;
        font-size: 20px;
        color:white;
        font-weight: 500;
        text-align: center;
    }
`

const BackArrow = styled.img`
    position: absolute;
    top : 0;
    left: 0;
    cursor: pointer;
`

const Prograss = styled.div`
    width: 100%;
    margin-top: 20px;
    position: relative;
`

const TotalBar = styled.div`
    background-color: #FBFBFB;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.2) inset,0px 0px 5px rgba(200,200,200,0.1); 
`

const SeqBar = styled(motion.div)`
    position: absolute;
    top:0;
    left: 0%;
    background-color: #78AFFF;
    width: ${props => props.howLong};
    height: 10px;
    border-radius: 10px;
    transition: 0.4s ease;
`

const Body = styled.section`
    width: 90%;
    height: fit-content;
`

const Btn = styled.div`
    cursor: pointer;
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
    margin-bottom: 100px;
    @media (max-height : 760px) {
        margin-bottom: 60px;
    }
`


function Create() {
    const [createSeq, setCreateSeq] = useRecoilState(isCreate);
    const isNick = useRecoilValue(isCreateNick);
    const isPhone = useRecoilValue(isCreatePhone);
    const isCh = useRecoilValue(isCreateCh);

    const navigate = useNavigate();

    const makeUser = async() => {
        const localDB = JSON.parse(localStorage.getItem('userInfo'))
        const docData = {
            uid : localDB.uid,
            name : localDB.name,
            status : 0,
            nickName : isNick,
            phoneNum: isPhone,
            character : isCh,
            dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
            friendList: [],
            todayCoin: 150,
            totalCoin: 150,
            todayRun : 0,
            todayKcal : 0,
            totalDay : 1,
            totalRun : 0,
            totalKcal : 0,
            inAppToken : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE5ODMwOTcsImp0aSI6IjM2NGY2OTQwLTNhNTEtMTFlZS1iMjBiLTcxZTQ5MWEyMDkzOSIsImFwcGxpY2F0aW9uX2lkIjoiNWYxODU2MjAtOWVlYS00NGI0LWEzMjUtNDNmM2M5MGVhZDE2Iiwic3ViIjoiQWxpY2UiLCJleHAiOjE2OTE5ODMxMTg4OTksImFjbCI6eyJwYXRocyI6eyIvKi91c2Vycy8qKiI6e30sIi8qL2NvbnZlcnNhdGlvbnMvKioiOnt9LCIvKi9zZXNzaW9ucy8qKiI6e30sIi8qL2RldmljZXMvKioiOnt9LCIvKi9pbWFnZS8qKiI6e30sIi8qL21lZGlhLyoqIjp7fSwiLyovYXBwbGljYXRpb25zLyoqIjp7fSwiLyovcHVzaC8qKiI6e30sIi8qL2tub2NraW5nLyoqIjp7fSwiLyovbGVncy8qKiI6e319fX0.EDmwDpeEDhot7mUb4gtRuouLj5CQB4ppmPdRU_J7mOMCtlF-Xzg51AwDZaBWk3vrZ_NwR5VcNZ8qHIAmvt8yOhP-G-_7LnFCPTydG9kedVeFuREepKtYgW4HC--06lSked2PZxRvN1yJ9XQ_elxp-SIIqu_Sb1gXuKCtTX8-tYPb-MuEb6nnghcFdNDtGRdstbLXp4L62opK7Jtq_X2_7a0dpZ7sW9puuWrUFJwYejY3LzNLbDBk0gSVW2P5RFy0cvoZhNG7m7pR302TBpP6RKt5GBjeog09Doi0RMahgZfDkx8RDzpuqMXUx2WOZ6g8KKCDAI8VxTrqPRBlpO-LJA"
        };
        await setDoc(doc(db, "userDB", localDB.uid), docData);
        console.log(docData)
    }

    const nextClick = () => {
        if(createSeq === 0){
            setCreateSeq(prev => prev +1)
        }else if (createSeq === 1) {
            if(isNick.length > 1){
                setCreateSeq(prev => prev +1)
            }
        }else if (createSeq === 2) {
            if(isPhone.length > 1){
                setCreateSeq(prev => prev +1)
            }
        }else if (createSeq === 3) {
            setCreateSeq(prev => prev +1)
        }else if (createSeq === 4) {
            makeUser();
            navigate('/tutorial');
        }
    }

    return (
      <Container >
        <Title>
            <h1>
                {
                    createSeq !== 0 && <BackArrow onClick={()=>setCreateSeq(prev => prev-1)} src={arrow}/>
                }

                MAKE CHARACTER
            </h1>
            <Prograss>
                <TotalBar />
                <SeqBar howLong={`${createSeq*25}%`}/>
            </Prograss>
        </Title>
        <Body>
            <AnimatePresence>
                { createSeq === 0 ? <First /> : 
                    createSeq === 1 ? <Second /> :
                        createSeq === 2 ? <Third /> :
                            createSeq === 3 ? <Fourth /> :
                                <Finish />
                }

                
            </AnimatePresence>
        </Body>
        <Btn onClick={()=>nextClick()}>
            {createSeq === 0 ?
                // 0일때
                "Start!"
                :
            createSeq === 4 ?
                // 4일때
                "Show Tutorial!"
                :
                // 나머지
                "Next"
            }
        </Btn>

      </Container>
    )
  }
  
  export default Create;