import React from 'react';

import styled from 'styled-components';
import { FlexRow, FlexRowSequence, teal } from '../utilities';
import SequenceRow from './SequenceRow';

const ScaleDisplay = styled.div`
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        position: absolute;
        left: 10%;
        margin-top: 0.3rem;
        height: 344px;
        color: ${teal};

        h4 {
                margin: 0;
        }

        @media (max-width: 1200px) {
                left: 5px;
                font-size: 0.7rem;
                height: 208px;
        }

        @media (max-width: 320px) {
                height: 185px;
        }
`;

export default function SequenceContainer({ sequence, updateSequence, scale, step }) {
        function genGridColumns() {
                const cols = [];
                if (sequence) {
                        for (let i = 0; i < 16; i++) {
                                cols.push(
                                        <SequenceRow
                                                key={i}
                                                index={i}
                                                sequence={sequence[i]}
                                                updateSequence={updateSequence}
                                                step={step}
                                        />
                                );
                        }
                }
                return cols;
        }

        const columns = genGridColumns();

        return (
                <FlexRowSequence justify="space-evenly">
                        <ScaleDisplay>
                                <h4>{scale[0]}</h4>
                                <h4>{scale[1]}</h4>
                                <h4>{scale[2]}</h4>
                                <h4>{scale[3]}</h4>
                                <h4>{scale[4]}</h4>
                                <h4>{scale[5]}</h4>
                                <h4>{scale[6]}</h4>
                                <h4>{scale[7]}</h4>
                        </ScaleDisplay>
                        {columns}
                </FlexRowSequence>
        );
}
