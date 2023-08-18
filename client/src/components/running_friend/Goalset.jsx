import React, { useState } from "react";
import styled from 'styled-components';
import flagimg from '../image/flag.png';
import dropbutton from '../image/dropdown.png';
import { setDistancegoal } from "../../store";
import { useSelector, useDispatch } from 'react-redux';




const Container = styled.div`
    width: 341px;
    height: ${props => (props.open ? '305px':'81px')};

    flex-shrink: 0;
    border-radius: 40px;
    background: rgba(72, 93, 133, 0.70);
    backdrop-filter: blur(15px);
    display: flex; 
    align-items: center; 
    padding: 16px;
    position: absolute;
    top:99px;
    bottom:664px;
    transition: height 0.3s, border-radius 0.3s;

`;

const Downcontent = styled.div`
    width:100%;
    height:48%;
    display: inline-flex;
    padding-right: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position:absolute;
    top:110px;
    left:0px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.41) 42.71%, rgba(255, 255, 255, 0.41) 51.56%, rgba(255, 255, 255, 0.33) 61.46%, rgba(255, 255, 255, 0.00) 100%);
`;

const Flag = styled.img`
    width: 19px;
    height: 23px;
    flex-shrink: 0;
    margin-left: 31px;
    position:fixed;
    top:29px;
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
    position:fixed;
    top:23px;
    left:61px;


`;

const Dropdownbutton = styled.img`
    width: 20.747px;
    height: 12.86px;
    flex-shrink: 0;
    margin-left: 137px;
    cursor: pointer;
    position:fixed;
    top:34.39px;
    right:29.25px;
`;



const KmScroll = styled.div`
    max-height: 148px; /* Set a maximum height to make it scrollable */
    overflow-y: auto; /* Add this line to enable vertical scrolling */
    position:absolute;
    left:15px;
    top:0px;
`;



const DropdownColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const KmDropdownItem = styled.p`
    text-align: center;
    font-family: Outfit;
    color: ${props => (props.selected ? ' #AFFF7E' : '#B7C7DF')};
    font-size: ${props => (props.selected ? '40px ' : '28px')};
    padding: 0px 0px 15px 15px;
    cursor: pointer;
    font-weight: 700;
    line-height: 40px; /* 100% */
   
`;


const Calorie =styled.div`
    width: 90px;
    color: var(--white, #AFFF7E);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
    position:absolute;
    left:120px;
    top:165px;

`;

const Min = styled.div`
    width: 90px;
    color: var(--white, #AFFF7E);
    text-align: center;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
    position:absolute;
    right:25px;
    top:165px;
`;


const TitleContainer = styled.div`
    display: inline-flex;
    width: 300px;
    height: 32px;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
    justify-content:center;

    position:fixed;
    top:75px;
`;

const MinTitle = styled.div`
    width: 90px;
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;

    /* RUNNINGMATE R/12 */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.03px;
`;

const CalorieTitle = styled.div`
    width: 90px;
    color: var(--font-font-gray, rgba(255, 255, 255, 0.40));
    text-align: center;

    /* RUNNINGMATE R/12 */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.03px;
`;

const KmTtitle = styled.div`
    width: 90px;
    color: var(--secondary-secondary-default, #AFFF7E);
    text-align: center;

    /* RUNNINGMATE R/12 */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.03px;
`;




const Distancegoal = styled.div`
  color: var(--secondary-secondary-default, #AFFF7E);
  width:72px;
  heigh:42px;
  text-align: right;
  font-family: Outfit;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 80% */
  float:left;
  position:fixed;
  left:160px;
  top:19px;


`;

const Km = styled.div`
    color: #FFF;
    text-align: center;

    /* RUNNINGMATE R/16 */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.04px;
    position:absolute;
    right:70px;
    top:39px;
`;

const DropdownContentContainer = styled.div`
opacity: ${props => (props.animationStarted ? 1 : 0)};
display: ${props => (props.animationStarted ? 'block' : 'none')};
`;

function Goalset() {
    const createOptions = (start, end, step) => {
        const options = [];
        for (let value = start; value <= end; value += step) {
          options.push(value.toFixed(1));
        }
        return options;
      };

    const KmOptions = createOptions(0.2, 5.0, 0.1);


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedKmOption, setSelectedKmOption] = useState(null);
    const [selectedCalorie, setSelectedCalorie] = useState(null);
    const [selectedMin, setSelectedMin] = useState(null);
    const [animationStarted, setAnimationStarted] = useState(false);

    //const distancegoal = useSelector((state => state.distance));
    const dispatch = useDispatch();
    
    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
        setAnimationStarted(true);
    };

    // const handleDropdownItemClick = (distance) => {
    //     // Handle the selected distance (e.g., dispatch an action or update state)
    //     console.log("Selected distance:", distance);
    //     dispatch(setDistancegoal(distance));
    //     setSelectedOption(distance);
        
    // };
    const handleKmDropdownItemClick = (km) => {
        setSelectedKmOption(km);
        const min = (km * 5).toFixed(0);
        const calorie = ((min / 5) * 49).toFixed(0);
        setSelectedMin(min);
        setSelectedCalorie(calorie);
        dispatch(setDistancegoal(km));


      };
    


  
      return (
        <Container open={dropdownOpen}>
            <Flag src={flagimg} />
            <Text>GOAL</Text>
            <Distancegoal>{selectedKmOption}</Distancegoal>
            <Km>KM</Km>
            <Dropdownbutton src={dropbutton} onClick={handleDropdownClick} />

            {/* Render the components conditionally based on dropdownOpen */}
            {dropdownOpen && (
                <DropdownContentContainer animationStarted={animationStarted}>
                    <TitleContainer>
                        <KmTtitle>KM</KmTtitle>
                        <CalorieTitle>CALORIE</CalorieTitle>
                        <MinTitle>MIN</MinTitle>
                    </TitleContainer>
                    <Downcontent>
                        <DropdownColumn>
                            <KmScroll>
                                {KmOptions.map((option, index) => (
                                    <KmDropdownItem 
                                        key={index}
                                        selected={option === selectedKmOption}
                                        onClick={() => handleKmDropdownItemClick(option)}
                                    >
                                        {option}
                                    </KmDropdownItem>
                                ))}
                            </KmScroll>
                        </DropdownColumn>
                    </Downcontent>
                    <Calorie>{selectedCalorie}</Calorie>
                    <Min>{selectedMin}</Min>
                </DropdownContentContainer>
            )}
        </Container>
    );
}


export default Goalset;