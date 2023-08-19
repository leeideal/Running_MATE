import React , { useState } from "react";
import styled from 'styled-components';
import searchicon from '../image/searchicon.png';
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

function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const handleIconClick = async () => {
        if (searchTerm) {
            console.log("Searching for:", searchTerm);
        }
    }
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
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
        </>
        
    );
}


export default Search;