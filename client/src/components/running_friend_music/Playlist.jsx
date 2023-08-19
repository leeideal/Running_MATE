import React , { useState } from "react";
import styled from 'styled-components';


const Text = styled.div`
    color: var(--font-font-default, #414F64);

    /* RUNNINGMATE B/24 */
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    position:absolute;
    left:30px;

`;


const SearchResult = styled.div`
    width: 340px;
    height: 56px;
    flex-shrink: 0; 
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    margin-bottom:5px;
    position:relative;
    top: 59px;
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
    width: 209px;
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
`;

function Playlist({ addedTracks }){

  

    return(
        <>
        <Text>Playlist</Text>
        <ul>
            {addedTracks.map((track, index) => (
            <li key={index}>
                {track.name} - {track.artists[0].name}
            </li>
            ))}
      </ul>
        </>
    )
}

export default Playlist;