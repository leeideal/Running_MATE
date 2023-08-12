import React, { useState } from "react";
import styled from 'styled-components';
import flagimg from '../image/flag.png';
import dropbutton from '../image/dropdown.png';


const Container = styled.div`
    width: 341px;
    height: 81px;
    flex-shrink: 0;
    border-radius: ${props => (props.open ? '40px 40px 0 0' : '40px')};
    background: rgba(72, 93, 133, 0.70);
    backdrop-filter: blur(15px);
    display: flex; 
    align-items: center; 
    padding: 16px;
    position: absolute;
    top:99px;
    bottom:664px;
    left:25px;
    right:24px;
    transition: height 0.3s, border-radius 0.3s;
`;

const Flag = styled.img`
    width: 19px;
    height: 23px;
    flex-shrink: 0;
    margin-left: 31px;
`;

const Text = styled.div`
    color: var(--white, #FFF);
    text-align: center;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; 
    margin-left: 11px;
`;

const Dropdownbutton = styled.img`
    width: 20.747px;
    height: 12.86px;
    flex-shrink: 0;
    margin-left: 137px;
    cursor: pointer;
`;

const DropdownContent = styled.div`
    width: 341px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 0 0 40px 40px;
    background: rgba(72, 93, 133, 0.70);
    backdrop-filter: blur(15px);
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    padding: 16px;
`;

const DropdownItem = styled.p`
    color: #333;
    font-size: 16px;
    margin: 8px 0;
    cursor: pointer;

    &:hover {
        background-color: #e5e5e5;
    }
`;

const dropdownOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  // Add more options as needed
];

function Goalset() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Container open={dropdownOpen}>
            <Flag src={flagimg} />
            <Text>GOAL</Text>
            <Dropdownbutton src={dropbutton} onClick={handleDropdownClick} />
            <DropdownContent open={dropdownOpen}>
                {dropdownOptions.map((option, index) => (
                    <DropdownItem key={index}>{option}</DropdownItem>
                ))}
            </DropdownContent>
        </Container>
    );
}

export default Goalset;
