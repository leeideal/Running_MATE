import React, { useState } from "react";
import styled from 'styled-components';
import flagimg from '../image/flag.png';
import dropbutton from '../image/dropdown.png';
import { setDistancegoal } from "../../store";
import { useSelector, useDispatch } from 'react-redux';




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
    transition: height 0.3s, border-radius 0.3s;
`;

const Gradiant = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.41) 42.71%, rgba(255, 255, 255, 0.41) 51.56%, rgba(255, 255, 255, 0.33) 61.46%, rgba(255, 255, 255, 0.00) 100%);
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
    height:224px;
    flex-shrink: 0;
    border-radius: 0 0 40px 40px;
    background: rgba(72, 93, 133, 0.70);
    backdrop-filter: blur(15px);
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    padding: 16px;
    flex-direction: row;
    flex-wrap: wrap;

`;

const KmScroll = styled.div`
    max-height: 148px; /* Set a maximum height to make it scrollable */
    overflow-y: auto; /* Add this line to enable vertical scrolling */
    position:relative;
    left:-105px;
`;

const CalorieScroll = styled.div`
    max-height: 148px; /* Set a maximum height to make it scrollable */
    overflow-y: auto; /* Add this line to enable vertical scrolling */
    justify-content:center;
    align-items:center;
    position:relative;
    bottom:145px;
    
`;

const MinScroll = styled.div`
    max-height: 148px; /* Set a maximum height to make it scrollable */
    overflow-y: auto; /* Add this line to enable vertical scrolling */
    justify-content:center;
    align-items:center;
    position:relative;
    bottom:295px;
    right:-105px;

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
    margin: 8px 0;
    cursor: pointer;
    font-weight: 700;
    line-height: 40px; /* 100% */
    

`;
const TitleContainer = styled.div`
    display: inline-flex;
    width: 300px;
    height: 32px;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
    justify-content:center;
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
  position:absolute;
  left:160px;

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



function Goalset() {
    const createOptions = (start, end, step) => {
        const options = [];
        for (let value = start; value <= end; value += step) {
          options.push(value.toFixed(1));
        }
        return options;
      };
    const createOptions2 = (start, end, step) => {
        const options = [];
        for (let value = start; value <= end; value += step) {
          options.push(value.toFixed(0));
        }
        return options;
      };
    const KmOptions = createOptions(0.2, 5.0, 0.1);
    const CalorieOptions = createOptions2(20, 200, 1); 
    const MinOptions = createOptions2(5, 30, 1);
    

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedKmOption, setSelectedKmOption] = useState(null);
    const [selectedMinOption, setSelectedMinOption] = useState(null);
    const [selectedCalorieOption, setSelectedCalorieOption] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [calorieScrollTop, setCalorieScrollTop] = useState(0);
    const [minScrollTop, setMinScrollTop] = useState(0);
    //const distancegoal = useSelector((state => state.distance));
    const dispatch = useDispatch();
    
    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDropdownItemClick = (distance) => {
        // Handle the selected distance (e.g., dispatch an action or update state)
        console.log("Selected distance:", distance);
        dispatch(setDistancegoal(distance));
        setSelectedOption(distance);
        
    };
    const handleKmDropdownItemClick = (km) => {
        setSelectedKmOption(km);
        const min = (km * 5).toFixed(0);
        const calorie = ((min / 5) * 49).toFixed(0);
        setSelectedMinOption(min);
        setSelectedCalorieOption(calorie);
        dispatch(setDistancegoal(km));
        setCalorieScrollTop((calorie - 20) * 44); // Adjust the value as needed
        setMinScrollTop((min - 5) * 44);
      };
    
      const handleMinDropdownItemClick = (min) => {
        setSelectedMinOption(min);
        const km = (min / 5).toFixed(1);
        const calorie = ((min / 5) * 49).toFixed(0);
        setSelectedKmOption(km);
        setSelectedCalorieOption(calorie);
        dispatch(setDistancegoal(km));
      };
    
      const handleCalorieDropdownItemClick = (calorie) => {
        setSelectedCalorieOption(calorie);
        const min = ((calorie / 49) * 5).toFixed(0);
        const km = (min / 5).toFixed(1);
        setSelectedMinOption(min);
        setSelectedKmOption(km);
        dispatch(setDistancegoal(km));
        
      };

  
    return (
        <Container open={dropdownOpen}>
            <Flag src={flagimg} />
            <Text>GOAL</Text>
            <Distancegoal>{selectedKmOption}</Distancegoal>
            <Km>KM</Km>
            <Dropdownbutton src={dropbutton} onClick={handleDropdownClick} />
            <DropdownContent open={dropdownOpen}>
                <DropdownColumn>
                    <TitleContainer>
                        <KmTtitle>KM</KmTtitle>
                        <CalorieTitle>CALORIE</CalorieTitle>
                        <MinTitle>MIN</MinTitle>
                    </TitleContainer>
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
                    <CalorieScroll>
                        {CalorieOptions.map((option, index) => (
                            <KmDropdownItem  style={{ scrollTop: calorieScrollTop }}
                                
                                key={index}
                                selected={option === selectedCalorieOption}
                                onClick={() => handleCalorieDropdownItemClick(option)}    
                            >
                                {option}
                            </KmDropdownItem>
                        ))}
                    </CalorieScroll>
                    <MinScroll>
                        {MinOptions.map((option, index) => (
                                <KmDropdownItem
                                    key={index}
                                    selected={option === selectedMinOption}
                                    onClick={() => handleMinDropdownItemClick(option)}   
                                >
                                    {option}
                                </KmDropdownItem>
                            ))}
                    </MinScroll>
                </DropdownColumn>
            </DropdownContent>
        </Container>
    );
}

export default Goalset;