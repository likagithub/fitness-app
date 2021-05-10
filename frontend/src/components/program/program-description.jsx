import React from 'react';

// base styling
import { SectionWrapper, BackgroundBeige } from 'components/base/styling';

const ProgramDescription = (props) => {
    return (
        <BackgroundBeige>
            <SectionWrapper>
                <p>{props.programDescription}</p>
            </SectionWrapper>
        </BackgroundBeige>
    );
};

export default ProgramDescription;