import React, { useState } from 'react';
import styled from 'styled-components';
import pauseicon from '../image/pause.png';
import playicon from '../image/play.png';
import nexticon from '../image/next.png';
import albumimg from "../image/seven.jpg";
import mp3 from "../audio/seven.mp3";

const Box = styled.div`
  width: 100%;
  height: 14%;
  flex-shrink: 0;
  position:absolute;
  bottom:0px;
  border-radius: 20px 20px 0px 0px;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(2px);
`;

const AlbumImage = styled.img`
  width: 49px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 100px;
  position:relative;
  top:-41px;
  left:7px;
  background-color:black;
  position:absolute;
  top:24px;
  left:28px;
`;

const Name = styled.div`
  color: var(--font-font-default, #414F64);
  width : fit-content;
  /* RUNNINGMATE B/20 */
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: 0.03px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:left;
  position:relative;
  left:95px;
  top:24px;
`;

const Artist = styled.div`
  color: var(--font-font-default, #414F64);
  width : fit-content;
  /* RUNNINGMATE R/12 */
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.03px;
  position:relative;
  left:95px;
  top:30px;
`;

const Play = styled.img`
  width: 39px;
  height: 47px;
  flex-shrink: 0;
  position:absolute;
  right:102px;
  top:29px;
`;

const Pause = styled.img`
  width: 42px;
  height: 51px;
  position:absolute;
  right:102px;
  top:29px;
`;

const Next = styled.img`
  width: 64px;
  height: 47px;
  position:absolute;
  top:29px;
  right:30px;
`;

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();
  
  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(prevState => !prevState);
  };

  return (
    <Box>
      <audio ref={audioRef} src={mp3}></audio>
      <Name>Seven (feat. Latto)</Name>
      <Artist>정국</Artist>
      <AlbumImage src={albumimg}></AlbumImage>
      {isPlaying ? (
        <Pause src={pauseicon} onClick={togglePlayPause} />
      ) : (
        <Play src={playicon} onClick={togglePlayPause} />
      )}
      <Next src={nexticon} />
    </Box>
  );
}

export default Music;
