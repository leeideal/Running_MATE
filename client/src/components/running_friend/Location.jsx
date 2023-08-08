import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Address = styled.div`
    color: var(--white, #FFF);
    text-align: center;

    /* RUNNINGMATE R/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    position: absolute;
    bottom: 50px;
    left:131.5px;
`;

const Container = styled.div`
    position: relative;
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
            setAddress(`${roadAddress.address_name}`);
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
    <Container>
      <Address>{address}</Address>
    </Container>
  );
}

export default Location;
