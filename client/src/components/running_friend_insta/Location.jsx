import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import icon from "../image/location.png";

const Address = styled.div`
    color: var(--white, #FFF);
    white-space: nowrap;
    text-align: left;
    font-family: Outfit;
    font-size: 14.179px;
    font-style: normal;
    font-weight: 500;
    line-height: 20.256px; /* 142.857% */
    letter-spacing: 0.035px;
    position:absolute;
    left:305px;
    top:520px;
    transform: rotate(270deg);

   
`;

const Icon = styled.img`
    width: 10.843px;
    height: 14.179px;
    flex-shrink: 0;
    position:absolute;
    transform: rotate(270deg);
    position:absolute;
    left:351.28px;
    bottom:30.82px;
`;


function Location() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    // 카카오맵 API 키를 발급받은 후, 아래 키를 YOUR_KAKAO_MAP_API_KEY에 입력합니다.
    const KAKAO_MAP_API_KEY = 'c7d0cbafc8f3b90acdba27c141253059';

    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getAddressFromCoords(latitude, longitude);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not available on this browser.');
      }
    };

    const getAddressFromCoords = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
            },
          }
        );

        if (response.data.documents && response.data.documents.length > 0) {
          const roadAddress = response.data.documents[0].road_address;
          if (roadAddress) {
            setAddress(`${roadAddress.region_1depth_name} ${roadAddress.region_2depth_name}`);
          } else {
            setAddress('주소를 찾을 수 없습니다.');
          }
        } else {
          setAddress('주소를 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('Error while fetching address:', error);
      }
    };

    getCurrentPosition();
  }, []);

  return (
    <>
      <Icon src={icon} />
      <Address>{address}</Address>
    </>
  );
}

export default Location;