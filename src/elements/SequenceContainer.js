import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexRow, teal } from '../utilities';
import SequenceRow from './SequenceRow';

const ContainAll = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 400px;
`;

const ScaleDisplay = styled.div`
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        margin-top: 0.3rem;
        height: 344px;
        color: ${teal};

        h4 {
                margin: 0;
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
        console.log(sequence);
        return (
                <FlexRow justify="space-evenly">
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
                </FlexRow>
        );
}
