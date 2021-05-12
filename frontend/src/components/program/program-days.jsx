import React from 'react';

// base styling
import { BackgroundBeige, SectionWrapper, HeadingBox, TextSmall } from 'components/base/styling';

// components
import DaySelection from "./day-selection"

const ProgramDays = (props) => {
    return (
            <BackgroundBeige>
                <SectionWrapper>
                    <HeadingBox>
                        <h3> {props.daysOfTraining} Tage</h3>
                        <TextSmall>Alle Anzeigen</TextSmall>
                    </HeadingBox>
                    <DaySelection />
                </SectionWrapper>
            </BackgroundBeige>
    );
};

export default ProgramDays;