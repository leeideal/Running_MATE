import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import coinimg from "../image/coin.png";
import { Provider, useDispatch } from "react-redux";
import store, {setCoin} from "../../store.js";
const Coinicon = styled.img`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    position: absolute;
    left:33px;
    top:201px;
`;
const Coinnum = styled.div`
    display: flex;
    width: 121px;
    height: 39px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: var(--font-font-default, #414F64);
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);

    /* RUNNINGMATE B/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;

    position:absolute;
    left:70px;
    top:193.5px;
`;


function Coin(){
    const [coinValue, setCoinValue] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
          setCoinValue(prevValue => prevValue + 1);
          dispatch(setCoin(interval));
        }, 1000); 
    
        return () => {
          clearInterval(interval); 
        };
      }, [dispatch]);
    return(
        <Provider store={store}>

            <Coinicon src={coinimg} />
            <Coinnum>{coinValue*10}</Coinnum>
        </Provider>
            
        
    )
    
}

export default Coin;