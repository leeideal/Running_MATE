import React, { useState, useEffect } from "react";
import styled from "styled-components";
import shoeimg from "../image/shoe.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  left: 37px;
  bottom: 21px;
`;

function Speed() {
  const [speed, setSpeed] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition((position) => {
          const kmPerHour = position.coords.speed * 3.6;
          setSpeed(kmPerHour.toFixed(0));
        });
      } else {
        console.log("Geolocation is not available");
      }
    };

    getLocation();

    // 30초 간격으로 speed 업데이트
    const interval = setInterval(getLocation, 15000);

    return () => clearInterval(interval);
  }, [dispatch]);

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
