import styled from "styled-components";
import profile from "../../image/main_profile.svg";

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
    user-select: ${(props) => (props.isActive === 0 ? "all" : "none")};
`

const data = [
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

function WithFriend() {

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
                                <ProfileImg src={profile}/>
                            </Profile>
                            <Status isActive={data.statue}></Status>
                            <WhoName>
                                {data.name}
                            </WhoName>
                        </Who>
                        <RunBtn isActive={data.statue}>
                            Run together
                        </RunBtn>
                    </Item>
                ))}
        </List>
      </Container>
    )
  }
  
  export default WithFriend;