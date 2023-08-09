import React from "react";
import styled from "styled-components";
import shoeimg from "../image/shoe.png";
import { useSelector } from "react-redux";

const Shoeicon = styled.img`
    width: 32.521px;
    height: 34.995px;
    flex-shrink: 0;
    position: absolute;
    left:33px;
    top:234px;
`;
const Speed = styled.div`
    color: var(--font-font-default, #414F64);
    text-align: center;
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);

    /* RUNNINGMATE B/34 */
    font-family: Outfit;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 117.647% */

    position:absolute;
    left:70px;
    top:234px;
    
`;
const Kms = styled.div`
    color: var(--font-font-default, #414F64);

    /* RUNNINGMATE B/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.035px;
    position:relative;
    left:37px;
    bottom:21px;
`;
    

function Shoe(){
    const speed = useSelector((state) => state.speed)
    return(
        <>
            <Shoeicon src={shoeimg} />
            <Speed>
                {speed*60/1000}<Kms>km/s</Kms>
            </Speed>
        </>
        
    )
    
}

export default Shoe;