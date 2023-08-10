import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // React Router의 Link 컴포넌트를 import

const Btn = styled.div`
    width: 340px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--white, #FFF);
    position:absolute;
    bottom:50px;
    cursor: pointer; // 커서를 변경하여 버튼임을 나타냅니다.
`;

const Text = styled.div`
    width: 293px;
    color: var(--font-font-default, #414F64);
    text-align: center;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    position:relative;
    top:13px;
    left:23px;
`;

function Button() {
    return (
        <>
            {/* Link 컴포넌트를 사용하여 버튼을 클릭하면 Result 페이지로 이동 */}
            <Link to="/running/friendfinish/result">
                <Btn>
                    <Text>View my running</Text>
                </Btn>
            </Link>
        </>
    );
}

export default Button;
