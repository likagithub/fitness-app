import React from 'react';

// components
import ProgramHeader from './header';
import ProgramDescription from'./program-description';
import ProgramPartitioning from'./program-partitioning';
import ProgramOverview from './program-overview'

const Program = () => {
    return (
            <>
                <ProgramHeader programTitle="Titel des Programms"/>
                <ProgramDescription programDescription="Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen."/>
                <ProgramPartitioning />
                <ProgramOverview />
            </>
    );
};

export default Program;