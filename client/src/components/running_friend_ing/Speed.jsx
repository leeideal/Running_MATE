import React, { useEffect } from "react";
import styled from "styled-components";
import shoeimg from "../image/shoe.png";
import { useSelector, useDispatch } from "react-redux";
import { setSpeed } from "../../store";

const Shoeicon = styled.img`
  width: 32.521px;
  height: 34.995px;
  flex-shrink: 0;
  position: absolute;
  left: 33px;
  top: 234px;
`;

const Speednow = styled.div`
  color: var(--font-font-default, #414F64);
  text-align: center;
  text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);

  /* RUNNINGMATE B/34 */
  font-family: Outfit;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 117.647% */

  position: absolute;
  left: 70px;
  top: 234px;
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
  position: relative;
  left: 45px;
  bottom: 21px;
`;

function Speed() {
  const speed = useSelector((state) => state.speed); // speed 상태 가져오기
  const dispatch = useDispatch();

  // api 사용해서 속도값 가져오는
  // useEffect(() => {
  //   const getLocation = () => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.watchPosition((position) => {
  //         const kmPerHour = position.coords.speed * 3.6;
  //         dispatch(setSpeed(kmPerHour.toFixed(0))); // speed 상태 업데이트
  //       });
  //     } else {
  //       console.log("Geolocation is not available");
  //     }
  //   };

  //   getLocation();

  //   const interval = setInterval(getLocation, 300);

  //   return () => clearInterval(interval);
  // }, [dispatch]);

  
  //테스트를 위해 임시로 생성한 함수!! 최종본에선 지워야함 단위 km/s 
  useEffect(() => {
    // 임시로 속도 값을 200으로 설정
    dispatch(setSpeed(50));

    const interval = setInterval(() => {
      // 임시로 속도 값을 200으로 설정
      dispatch(setSpeed(50));
    }, 300);

    return () => clearInterval(interval);
  }, [dispatch]);
  //-------------------------------------------------------

  useEffect(() => {
    console.log(speed); // 속도 상태가 업데이트될 때마다 로그 출력
  }, [speed]);

  return (
    <>
      <Shoeicon src={shoeimg} />
      <Speednow>
        {speed}
        <Kms>km/h</Kms>
      </Speednow>
    </>
  );
}

export default Speed;
