import React from "react";
import styled from 'styled-components';
import img from '../image/coin.png';
import moneyimg from '../image/money.png';


const Coinicon = styled.img`
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    position:absolute;
    top:534px;
    left:85px;
`;

const Num = styled.div`
    display: flex;
    width: 161px;
    height: 39px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: var(--white, #FFF);
    text-align: center;
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);
    font-family: Outfit;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 80% */

    position:absolute;
    top:533px;
    left:131px;
`;

const Money = styled.img`
    display: flex;
    width: 330px;
    height: 340px;
    justify-content: center;
    align-items: center;
    position:absolute;
    bottom:0px;
`;

function Coin(){
    return(
        <>
            <Money src={moneyimg} />
            <Coinicon src={img} />
            {/* 코인은 변수 받아오는걸로 수정해야함 */}
            <Num>23000</Num>
            
        </>
    );
}

export default Coin;