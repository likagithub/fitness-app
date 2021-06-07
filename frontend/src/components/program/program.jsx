import React from 'react';

// components
import ProgramHeader from './header';
import ProgramDescription from'./program-description';
import ProgramPartitioning from'./program-partitioning';
import ProgramDays from './program-days'

const Program = () => {
    return (
            <>
                <ProgramHeader />
                <ProgramDescription/>
                <ProgramPartitioning/>
                <ProgramDays daysOfTraining="21"/>
            </>
    );
};

export default Program;