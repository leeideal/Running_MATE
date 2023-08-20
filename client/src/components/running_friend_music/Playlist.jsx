import React, { useState, useEffect, useRef} from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import userimg from "../image/usercharacter_top.png";
import eclipse from "../image/eclipse.png";
import deleteicon from "../image/delete.png";
const Text = styled.div`
    color: var(--font-font-default, #414F64);

    /* RUNNINGMATE B/24 */
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    text-align:left
    line-height: 32px; /* 133.333% */
    position:absolute;
    left:40px;
    top:35px;

`;

const PlaylistContainer = styled.div`
    width: 100%;
    height: 30%;
    flex-shrink: 0;
    position:relative;
    top:80px;

`;

const TrackItem = styled.div`
    width: 340px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 40px;
    margin: 5px 25px 5px 25px;
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    align-item:center;
    
`;


const AlbumImage = styled.img`
    width: 49px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 100px;
    position:relative;
    top:-41px;
    left:7px;
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
    position:relative;
    left:68px;
    top:4px;

`;

const Artist = styled.div`
    color: var(--font-font-default, #414F64);
    /* RUNNINGMATE R/12 */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.03px;
    position:relative;
    left:68px;
    top:4px;

`;

const SlideInAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ToastContainer = styled.div`
    position: fixed;
    bottom: ${({ showToast }) => (showToast ? "20px" : "-100px")}; /* Slide in if showToast is true */
    left: 0;
    bottom:0;
    width: 100%; /* Set width to 100% of the viewport width */
    height:60%;
    transform: translateX(0%);
    animation: ${SlideInAnimation} 0.3s ease-in-out;
    transition: bottom 0.3s ease-in-out;
    justify-content: center;
    align-items:center;
    background-color: white;
    border-radius: 30px 30px 0px 0px ;
    blur:2px;
`;

const PlayerimgCircle = styled.img`
    width: 47px;
    height: 47px;
    flex-shrink: 0;
    position:absolute;
    right:48px;
    top:2px;
`;

const Playerimg = styled.img`
    width: 20px;
    height: 25px;
    flex-shrink: 0;
    position:absolute;
    right:62px;
    top:13px;
`;
const Done = styled.div`
  width: 85px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 20px;
  background:   #819EC7;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
  text-align:center;
  position:absolute;
  right:40px;
  top:30px;
 
`;
const Donetxt = styled.div`
  width: 73.25px;
  color: var(--font-font-default, #414F64);
  text-align: center;

  /* RUNNINGMATE B/24 */
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  position:relative;
  left:5.8px;
  `;

const Delete = styled.img`
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    position:absolute;
    right:25px;
    top:20px;
    cursor: pointer;


`;

function Playlist({ selectedTracks }){
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [tracks, setTracks] = useState(selectedTracks);
    const toastContainerRef = useRef(null);
    const [selectedUris, setSelectedUris] = useState([]); // State to store selected uris


    const [selectedUris, setSelectedUris] = useState([]); // State to store selected uris


    const handleDelete = (index) => {
        const newTracks = [...tracks];
        newTracks.splice(index, 1);
        setTracks(newTracks);


    };
      useEffect(() => {
        if (selectedTracks.length > 0) {
          setShowToast(true);
    
          const closeToastOnClickOutside = (e) => {
            if (toastContainerRef.current && !toastContainerRef.current.contains(e.target)) {
              setShowToast(false);
            }
          };
    
          document.addEventListener("click", closeToastOnClickOutside);
    
          const toastTimer = setTimeout(() => {
            setShowToast(false);
          }, 300000);
    
          return () => {
            document.removeEventListener("click", closeToastOnClickOutside);
            clearTimeout(toastTimer);
          };
        }
      }, [selectedTracks]);

      const handleDoneClick = () => {
        const uris = selectedTracks.map((track) => track.uri);
        setSelectedUris(uris);
        console.log(uris)
        navigate("/running/friend", { state: { uris } });
      };

    return(
        <>
            {showToast && (
                <ToastContainer 
                showToast={showToast}
                ref={toastContainerRef}>
                    <Text>Playlist</Text>
                <PlaylistContainer>
                    {selectedTracks.map((track, index) => (
                        <TrackItem key={index}>
                            <Name>{track.name.length > 8 ? track.name.substr(0,8) : track.name }...</Name>
                            <Artist>{track.artists[0].name}</Artist>
                            <AlbumImage src={track.album.images[0].url} alt="Album" />
                            <PlayerimgCircle src={eclipse}/>
                            <Playerimg src={userimg} />
                            <Delete src={deleteicon} onClick={() => handleDelete(index)} />
                        </TrackItem>
                        
                    ))}
                </PlaylistContainer>
                

                <Done onClick={ handleDoneClick }>
                  <Donetxt>done</Donetxt>
                </Done>
                
            </ToastContainer>
            )}
      </>
    );
}

export default Playlist;