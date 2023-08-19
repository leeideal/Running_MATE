import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    width: 391px;
    height: 118px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(2px);

    position:absolute;
    bottom:0;
`;

 

function Music() {


    return(
        <>
            <Box/>
        </>
    )
}

export default Music;