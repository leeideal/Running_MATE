import styled from "styled-components";
import logout from "../../image/nav_logout.svg";
import search from "../../image/nav_search.svg";
import profile10 from "../../image/main_profile10.svg";
import profile from "../../image/main_profile.svg";
import profile2 from "../../image/main_profile2.svg";
import {useForm} from "react-hook-form"
import { useState } from "react";
import { isData } from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";


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
  background-color: ${(props) => (props.isActive)};
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

const ProfileImg2 = styled.img`
  width: 45px;
  height: 45px;
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


const FindList = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AddFind = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
`

const FollowBtn = styled.div`
    background-color: #78AFFF;
    color : white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 12px;
    height: 30px;
    width: 60px;
    font-weight: 500;
    cursor: pointer;
`


function SliderContent() {
    const {register, handleSubmit} = useForm();
    const [serachActive, isSearchActive] = useState(false);
    const [arr, setArr] = useState([]);
    const [userDB, setUserDB] = useRecoilState(isData); // 유저 정보
    const navigate = useNavigate();
    const [find, setFind] = useState(false);

    const onValid = async(data) => {
        setArr([])
        const q = query(collection(db, "userDB"), where("nickName", "==", data.search));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.size > 0){
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setArr((prev) => {
                    return [...prev, doc.data()]
            })
            });
        }else{
            setArr([])
        }
        
        setFind(true);
    }

    const logOut = async() => {
        const uid = JSON.parse(localStorage.getItem('userInfo'));
        const outRef = doc(db, "userDB", uid.uid);
        await updateDoc(outRef, {
            "status": 2
        });
        localStorage.clear();
        navigate('/login');
    }

    const follow = async(i) => {
        const uid = JSON.parse(localStorage.getItem('userInfo'));
        const outRef = doc(db, "userDB", uid.uid);
        await updateDoc(outRef, {
            "friendList": [...userDB.friendList, i]
        });
        const docSnap = await getDoc(outRef);
        setUserDB(docSnap.data());
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
                    <Status isActive={userDB?.status === 0 ? "#78AFFF" : userDB?.status === 1 ? "#AFFF7E" : "#B7C7DF"}></Status>
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
            {find ?
                arr.length>0 ? 
                <FindList>
                    {arr.map((i,num)=>(
                        <AddFind key={num}>
                            <ProfileImg2 src={i?.character ? profile : profile2}/>
                            <WhoName style={{marginLeft:"-20px"}}>
                                {i?.nickName}
                            </WhoName>
                            {userDB?.FindList}
                            <FollowBtn onClick={()=>{
                                follow(i);
                                setFind(false);
                            }}>
                                Follow
                            </FollowBtn>
                        </AddFind>
                    ))}
                </FindList> :
                <FindList>
                    No Result!
                </FindList>
                :
                null
            }
        </Search>

        {/* 친구 목록 */}
        <List>
            {userDB?.friendList.map((data, id)=>(
                <Item key={id}>
                    <Who>
                        <Profile >
                            <ProfileImg src={data.character ? profile : profile2}/>
                        </Profile>
                        <Status isActive={data?.status === 0 ? "#78AFFF" : data?.status === 1 ? "#AFFF7E" : "#B7C7DF"}></Status>
                        <WhoName>
                            {data.nickName}
                        </WhoName>
                    </Who>
                </Item>
            ))}
        </List>
      </Container>
    )
  }
  
  export default SliderContent;