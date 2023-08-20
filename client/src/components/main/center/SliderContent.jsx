import styled from "styled-components";
import logout from "../../image/nav_logout.svg";
import search from "../../image/nav_search.svg";
import profile10 from "../../image/main_profile10.svg";
import profile from "../../image/main_profile.svg";
import profile2 from "../../image/main_profile2.svg";
import {useForm} from "react-hook-form"
import { useState } from "react";
import { isData } from "../../../atoms";
import { useRecoilValue } from "recoil";


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color : #414F64;
`


const Header = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Log = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
        width: 17px;
        height: auto;
        margin-right: 3px;
    }
    p{
        font-size: 12px;
        margin-top: -1px;
    }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`

// status = 0 : 접속, 1: 러닝, 2 : 접속안함
const Status = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.isActive === 0 ? "#78AFFF" : props.isActive === 1 ? "#AFFF7E" : "#B7C7DF")};
  box-shadow: rgba(50, 50, 93, 0.35) 0px 1px 2px -1px inset, rgba(0, 0, 0, 0.3) 0px 6px 12px -6px inset; 
  border-radius: 50%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 5px;
`

const Name = styled.div`
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

const Search = styled.div`
    width: 80%;
    margin-top: 30px;
`

const Meet = styled.h1`
    color: #819EC7;
    font-size: 24px;
    font-weight: 500;
`

const Form = styled.form`
    position: relative;
    margin-top: 20px;
    img{
        position: absolute;
        top:5px;
        left:12px;
    }
`

const Input = styled.input`
    background-color : rgb(235,237,242);
    border-radius: 15px;
    border: 0.5px solid #B7C7DF;
    padding-top:6px;
    padding-bottom: 6px;
    padding-left: 40px;
    padding-right: 5px;
    width: ${(props) => (props.isActive ? "100%" : "36px")};
    transition: 0.5s;
`

const List = styled.div`
    margin-top: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;

`

const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
`

const Who = styled.div`
    display: flex;
`

const WhoName = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 5px;
`

const data = [
    {
        "id" : 1,
        "name" : "Erisson",
        "statue" : 0
    },
]


function SliderContent() {
    const {register, handleSubmit} = useForm();
    const [serachActive, isSearchActive] = useState(false);
    const userDB = useRecoilValue(isData);

    const onValid = (data) => {
        console.log(data);
      }

    const logOut = () => {
        console.log("로그아웃")
    }

    return (
      <Container >
        {/* 상단 + 로그아웃 */}
        <Header>
            <Log onClick={()=>logOut()}>
                <img src={logout} />
                <p>Log Out</p>
            </Log>
            <Box>   
                <Info>
                    <Status isActive="#78AFFF"></Status>
                    <Name>Hi! {userDB?.nickName}</Name>
                </Info>
                <Profile >
                    <ProfileImg src={userDB?.character ? profile : profile2}/>
                </Profile>
            </Box>
        </Header>

        {/* 친구 검색 */}
        <Search>
            <Meet>
                Meet your<br></br>
                friends
            </Meet>
            <Form onSubmit={handleSubmit(onValid)} onClick={()=>isSearchActive(true)}>
                <img src={search} onClick={()=>isSearchActive(prev => !prev)}/>
                <Input isActive={serachActive} {...register("search", {required : true})} />
            </Form>
        </Search>

        {/* 친구 목록 */}
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
                </Item>
            ))}
        </List>
      </Container>
    )
  }
  
  export default SliderContent;