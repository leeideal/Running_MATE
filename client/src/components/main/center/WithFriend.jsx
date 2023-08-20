import styled from "styled-components";
import profile10 from "../../image/main_profile.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCall, isCalling, isData } from "../../../atoms";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color : #414F64;
`

const SmallTitle = styled.h6`
    color : #819EC7;
    font-weight: 600;
`

const BigTitle = styled.h1`
    font-weight: 600;
    font-size: 26px;
    margin-top: 20px;
`

const List = styled.div`
    margin-top: 30px;
    height: 450px;
    @media (max-height : 900px) {
        height: 40vh;
    }
    @media (max-height : 740px) {
        height: 30vh;
    }
    overflow-y: scroll;
`

const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

const Who = styled.div`
    display: flex;
`

const Profile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.35) 0px 3px 6px -1px inset, rgba(0, 0, 0, 0.3) 0px 12px 23px -12px inset;
`

// status = 0 : 접속, 1: 러닝, 2 : 접속안함
const Status = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.isActive === 0 ? "#78AFFF" : props.isActive === 1 ? "#AFFF7E" : "#B7C7DF")};
  box-shadow: rgba(50, 50, 93, 0.35) 0px 1px 2px -1px inset, rgba(0, 0, 0, 0.3) 0px 6px 12px -6px inset; 
  border-radius: 50%;
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`

const WhoName = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 5px;
`

const RunBtn = styled.div`
    border-radius: 15px;
    width: 100px;
    font-size: 12px;
    font-weight: 600;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity:${(props) => (props.isActive === 0 ? 1 : 0.4)};
    //user-select: ${(props) => (props.isActive === 0 ? "all" : "none")};
    cursor: pointer;
`

const HangBtn = styled.div`
    border-radius: 12px;
    width: 70px;
    font-size: 12px;
    font-weight: 600;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color : #00518B;
    border: 1px solid #00518B;
`

const data_many = [
    {
        "id" : 1,
        "name" : "Erisson",
        "statue" : 0
    },
    {
        "id" : 2,
        "name" : "Erisson",
        "statue" : 0
    },
    {
        "id" : 3,
        "name" : "Erisson",
        "statue" : 1
    },
    {
        "id" : 4,
        "name" : "Erisson",
        "statue" : 0
    },
    {
        "id" : 5,
        "name" : "Erisson",
        "statue" : 2
    },
    {
        "id" : 6,
        "name" : "Erisson",
        "statue" : 1
    },
    {
        "id" : 7,
        "name" : "Erisson",
        "statue" : 0
    },
    {
        "id" : 8,
        "name" : "Erisson",
        "statue" : 0
    },
]

const data = [
    {
        "id" : 1,
        "name" : "Erisson",
        "statue" : 0
    },
]

function WithFriend() {
    const [letCall, letCallFn] = useRecoilState(isCall);
    const [getCall, getCallFn] = useRecoilState(isCalling);
    const navigate = useNavigate();
    const userDB = useRecoilValue(isData);


    return (
      <Container>
        <SmallTitle>
            RUNNING WITH FIREND
        </SmallTitle>
        <BigTitle>
            Choose friend<br></br>
            Who you want to run with
        </BigTitle>
        <List>
            {data.map((data)=>(
                    <Item key={data.id}>
                        <Who>
                            <Profile >
                                <ProfileImg src={profile10}/>
                            </Profile>
                            <Status isActive={data.statue}></Status>
                            <WhoName>
                                {data.name}
                            </WhoName>
                        </Who>
                        {
                            letCall ?
                            // 전화 끊기
                            <HangBtn onClick={()=>{
                                getCallFn(2)
                                letCallFn(false);
                            }} id="btn-hangup">
                                Waiting
                            </HangBtn>
                            :
                            // 전화 걸기
                            <RunBtn onClick={()=>{
                                getCallFn(1)
                                letCallFn(true)
                                navigate('/running/friend');
                            }} id="btn-call" isActive={data.statue}>
                                Run together
                            </RunBtn>
                        }
                    </Item>
                ))}
        </List>
      </Container>
    )
  }
  
  export default WithFriend;