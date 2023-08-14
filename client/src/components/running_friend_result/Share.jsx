import React, { useRef } from "react";
import styled from 'styled-components';
import img from '../image/insta.png';
import Insta from '../../router/Insta';

const Icon = styled.img`
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    position:absolute;
    right:39px;
    top:444px;
    cursor: pointer;
`;

const Comment = styled.div`
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;

    /* RUNNINGMATE R/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;

    position:absolute;
    top:441px;
    right:65px;

`;

function Share() {
    const canvasRef = useRef(null);

    const handleButtonClick = () => {
        const canvas = canvasRef.current;

        if (canvas) {
            const context = canvas.getContext("2d");

            // MyComponent 컴포넌트를 canvas에 그립니다.
            const componentElement = <Insta />;
            const svgString = new XMLSerializer().serializeToString(componentElement);

            // 컴포넌트를 canvas에 그려 이미지로 변환
            const iconImage = new Image();
            iconImage.onload = () => {
                context.drawImage(iconImage, 0, 0, iconImage.width, iconImage.height);
                const imageDataURL = canvas.toDataURL("image/png");

                // 이미지 다운로드 링크 생성
                const dataURL = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = dataURL;
                link.download = "running_share.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            img.src = "data:image/svg+xml," + encodeURIComponent(svgString);
        }
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{ display: "none" }}
                width={395}
                height={635}
            />
            <Comment>Share my running</Comment>
            <Icon src={img} onClick={handleButtonClick} />
            {/* <Insta style={{ display: "none" }} /> */}
        </>
    );
}

export default Share;
