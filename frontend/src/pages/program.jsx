import React from 'react';

// components
import ProgramHeader from 'components/program/header';
import ProgramDescription from'components/program/program-description';
import ProgramPartitioning from'components/program/program-partitioning';
import ProgramDays from 'components/program/program-days'

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