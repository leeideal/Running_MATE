import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import axios from 'axios';
import icon from "../image/location2.png";


const Location = styled.div`
    color: #AAB8C1;
    text-align: center;

    /* RUNNINGMATE R/14 */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    position:relative;
    
`;

const Icon = styled.img`
    width: 10.706px;
    height: 14px;
    flex-shrink: 0;
    position:relative;
    top:20px;
    left:120px;
`;

function Address() {

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
        <Location>{address}</Location>
    </>
  );
}

    
    export default Address;