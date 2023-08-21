import styled from "styled-components";
import background from "../components/image/calling_back.png";
import btn from "../components/image/call_btn.svg";
import profile from "../components/character/main_c1.gif";
import profile2 from "../components/character/main_c3.gif";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAnswered, isData } from "../atoms";


const Container = styled.div`
    font-family: 'Outfit', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image : url(${background});
    background-repeat : no-repeat;
    background-size : cover;
`

const SmallTitle = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    h6{
        @media (max-height : 700px) {
            margin-top: 20px;
        }
        margin-top: 40px;
    }
    h1{
        margin-top: 70px;
        color: #96F2FF;
        text-align: center;
        text-shadow: 0px 0px 19px rgba(255, 255, 255, 0.41);
        font-weight: 800px;
        font-size: 36px;
        @media (max-height : 700px) {
            margin-top: 30px;
        }
    }
    h3{
        font-size: 32px;
        margin-top: 20px;
    }
`

const Btn = styled.div`
    cursor: pointer;
    background-color: #EB5545;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`

const Ch = styled.img`
    margin-top: -20px;
`



function Calling() {
    const navigate = useNavigate();
    const userDB = useRecoilValue(isData);
    const [answer, setAnswer] = useRecoilState(isAnswered);

    if(answer === 1){
        navigate('/running/friend/music');
        setAnswer(2);
    }

    return (
        <Container> 
            <SmallTitle>
                <h6>CALLING</h6>
                <h1>Connecting to</h1>
                <h3>Friend...</h3>
            </SmallTitle>
            <Ch src={userDB?.character ? profile : profile2} />
            <Btn onClick={()=>{
                navigate('/');
                location.reload();
            }}>
                <img src={btn} />
            </Btn>
        
        </Container>
    )
}
  
  export default Calling;
  