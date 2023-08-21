import React from "react";
import styled from 'styled-components';

const DateText = styled.div`
    color: #647283;
    text-align: center;

    /* RUNNINGMATE B/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;
    position:relative;
    top:11px;
`;

function Dateinfo() {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    
    // 원하는 형식으로 조합
    const month = formattedDate.split(" ")[0];
    const day = formattedDate.split(" ")[1].replace(",", "");
    const year = formattedDate.split(" ")[2];

    return (
        <DateText>{`${month} ${day}, ${year}`}</DateText>
    );
}

export default Dateinfo;
