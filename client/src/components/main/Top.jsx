import styled from "styled-components";
import profile from "../image/main_profile.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Box = styled.div`

`

const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.35) 0px 3px 6px -1px inset, rgba(0, 0, 0, 0.3) 0px 12px 23px -12px inset;
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`

function Top() {
    return (
      <Container >
        <Box>
          <Profile>
            <ProfileImg src={profile}/>
          </Profile>
        </Box>
      </Container>
    )
  }
  
  export default Top;