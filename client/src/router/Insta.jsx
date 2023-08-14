{/*저장되는 사진 컴포넌트*/ }

import React , { useRef }from "react";
import styled from 'styled-components';

import Userimg from '../components/image/UserCharacter.png';
import Friendimg from '../components/image/FriendCharacter.png';


const Container = styled.div`
    width: 395px;
    height: 635px;
    background: #94BDFD;
`;
const Friend = styled.img`
    display: flex;
    width: 276px;
    height: 338px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position:absolute;
    bottom:129px
`;

const User = styled.img`
    width: 212px;
    height: 306px;
    flex-shrink: 0;
    

`;

function Insta(){
    return(
        <Container>
            <Friend src={Friendimg}/>
            <User src={Userimg} />
        </Container>
    );
}

export default Insta;