import styled from "styled-components";

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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Item = styled.div`
    width: 170px;
    height: 170px;
    margin: 10px;
    border-radius: 10px;
    background-color: ${(props) => (props.bgColor)};
`

const data = [
    {
        "id" : 1,
        "city" :"Paris",
        "name" :"Gabriel",
        "able" : true,
        "color" : "#FFE7F8"
    },
    {
        "id" : 2,
        "city" :"Paris",
        "name" :"Daniel",
        "able" : false,
        "color" : "#E7FCFF"
    },
    {
        "id" : 3,
        "city" :"Seoul",
        "name" :"Sumin",
        "able" : false,
        "color" : "#C7E3FD"
    },
    {
        "id" : 4,
        "city" :"Newyork",
        "name" :"Jack",
        "able" : false,
        "color" : "#FBFFC9"
    },
]

function WithMate() {

    return (
      <Container>
        <SmallTitle>
            RUNNING WITH MATE
        </SmallTitle>
        <BigTitle>
            Choose MATE<br></br>
            Who you want to run with
        </BigTitle>
        <List>
            {data.map((i) => (
                <Item key={i.id} bgColor={i.color}>
                    
                </Item>
            ))}
        </List>
      </Container>
    )
  }
  
  export default WithMate;