import React from 'react';

// base styling
import { BackgroundBeige, SectionWrapper, HeadingBox, TextSmall } from 'components/base/styling';

const ProgramOverwiew = () => {
    return (
            <BackgroundBeige>
                <SectionWrapper>
                    <HeadingBox>
                        <h3>21 Tage</h3>
                        <TextSmall>Alle Anzeigen</TextSmall>
                    </HeadingBox>
                </SectionWrapper>
            </BackgroundBeige>
    );
};

export default ProgramOverwiew;