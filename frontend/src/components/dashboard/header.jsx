import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    max-width: 245px;
    margin: 70px 0 50px 0;
`;


const DashboardHeader = (props) => {

    let timeOfDay = () => {
        let myDate = new Date();
        let hour = myDate.getHours();
            
            if (hour < 12) {
                timeOfDay = "Morgen";
            } else if (hour < 15) {
                timeOfDay = "Tag";
            }
            else if (hour < 18) {
                timeOfDay = "Nachmittag";
            }
            else {
                timeOfDay = "Abend";
            }
    
            return timeOfDay;
    };

    return (
        <header>
            <StyledH1>Guten {timeOfDay()}, {props.userName}</StyledH1>
        </header>
    )
}

export default DashboardHeader;