import React , { useState } from "react";
import Playlist from "./Playlist";
import styled from 'styled-components';
import searchicon from '../image/searchicon.png';
import addbtn from '../image/addbtn.png';


const Bar = styled.div`
    width: 340px;
    height: 41px;
    position:absolute;
    top:282px;
`;
const Input =styled.input`
    width: 340px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid var(--primary-primary-dark-3, #B7C7DF);
    background: rgba(255, 255, 255, 0.50);
    color: var(--font-font-default, #414F64);
    
    /* RUNNINGMATE R/20 */
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    padding-left:15px;
`;
const Icon = styled.img`
    width: 17.5px;
    height: 17.5px;
    flex-shrink: 0;
    position:relative;
    left:302px;
    top:-30px;

`;

const SearchResult = styled.div`
    width: 340px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.10);
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
    left:68px;
    top:4px;

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
    left:68px;
    top:4px;
`;

const Addbtn = styled.img`
    width: 19px;
    height: 18px;
    flex-shrink: 0;
    position:absolute;
    right:22px;
    top:19px;
 
`;



function Search(){
    const clientId = "317293e665e347cd95e2ef85454f4384";
    const clientSecret = "35ffd8cb3dd14905b4098122b5296257";

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    const [toastVisible, setToastVisible] = useState(false); // Manage toast visibility state
    const [selectedTracks, setSelectedTracks] = useState([]);
    // 토큰 요청
    const getToken = async () => {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${basicAuth}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials"
        });

        const data = await response.json();
        return data.access_token;
    };
    const searchTracks = async (accessToken, query) => {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    
        const data = await response.json();
        return data.tracks.items;
    };

    const handleIconClick = async () => {
        if (searchTerm) {
            try {
                const accessToken = await getToken();
                const searchResults = await searchTracks(accessToken, searchTerm);
                setSearchResults(searchResults.slice(0, 5));
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setSearchResults([]);
    };

    const handleAddButtonClick = (track) => {
        console.log("Adding to playlist:", track);
        setSelectedTracks((prevSelectedTracks) => [...prevSelectedTracks, track]);
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000); // Hide the toast after 3 seconds
        
    };



    return(
        <>
            
            <Bar>
            <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    
            >
            </Input>
            <Icon src={searchicon} onClick={handleIconClick} />
            
          
               
            </Bar>
            <div>
                {searchResults.map((result, index) => (
                        <SearchResult key={index}>
                            <Addbtn 
                                src={addbtn}
                                onClick={() => handleAddButtonClick(result)}
                            />
                            <Name>{result.name.length > 8 ? `${result.name.substr(0,8)}...` : result.name }</Name>
                            <Artist>{result.artists[0].name}</Artist>
                            <AlbumImage src={result.album.images[0].url} alt="Album" />
                        </SearchResult>
                       
                    ))}
                    <Playlist selectedTracks={selectedTracks} />
            </div>
   
        </>
        
    );
}


export default Search;