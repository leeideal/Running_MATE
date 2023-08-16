import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
const Btn = styled.div`
    width: 340px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--white, #FFF);
    cursor: pointer;
    position: absolute;
    bottom: 50px;
    left: 25px;
`;
const Text = styled.div`
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    position:relative;
    top:13px;
`;

function Button() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // 버튼 클릭 시 페이지 이동
        navigate("/running/friend/finish/result");
    };

    return (
        <>
            <Btn onClick={handleButtonClick}>
                <Text>View my running</Text>
            </Btn>
        </>
    );
}

export default Button;
