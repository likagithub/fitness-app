import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

// base styling
import { SectionWrapper, TextSmall } from 'components/base/styling';


const ChartBox = styled.div`
    display: flex;
    margin: 40px 0 10px 0;
`

const StyledPieChart = styled(PieChart)`
    width: 40vw;
`

const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 2rem;
`

const LabelDot = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    display: inline-block;
    margin-right: .75rem;
`

const ProgramPartitioning = () => {

    let label = [
        'Krafttraining',
        'Cardio',
        'Koordination',
        'Beweglichkeit'
    ];

    const data = [
        { title: 'One', value: 10, color: '#7A8778' },
        { title: 'Two', value: 15, color: '#939C91' },
        { title: 'Three', value: 20, color: '#BBC8B9' },
        { title: 'Three', value: 20, color: '#D2DDD0' },
    ]

    return (
            <SectionWrapper>
                <h3>So ist das Programm aufgeteilt:</h3>
                <ChartBox>
                    <StyledPieChart
                        data={data}
                        />
                        <LabelBox>
                            <TextSmall><LabelDot color={data[0].color}></LabelDot>{label[0]}</TextSmall>
                            <TextSmall><LabelDot color={data[1].color}></LabelDot>{label[1]}</TextSmall>
                            <TextSmall><LabelDot color={data[2].color}></LabelDot>{label[2]}</TextSmall>
                            <TextSmall><LabelDot color={data[3].color}></LabelDot>{label[3]}</TextSmall>
                        </LabelBox>
                </ChartBox>
            </SectionWrapper>
    );
};

export default ProgramPartitioning;