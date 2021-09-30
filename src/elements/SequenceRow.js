import React from 'react';
import styled, { css } from 'styled-components';
import { indigo, teal } from '../utilities';
import SequenceBlock from './SequenceBlock';

const Row = styled.div`
        display: flex;
        flex-direction: column-reverse;
        color: ${teal};
        background-color: transparent;
        border-radius: 100px;
        transition: all 0.05s;
        position: relative;

        span {
                margin-bottom: 0.5rem;
        }
`;

export default function SequenceRow({ index, sequence, updateSequence, step }) {
        function genBlocks() {
                const blocks = [];
                for (let i = 0; i < 8; i++) {
                        if (sequence.indexOf(i) !== -1) {
                                blocks.push(
                                        <SequenceBlock
                                                key={i}
                                                index={i}
                                                dataRow={index}
                                                dataActive
                                                updateSequence={updateSequence}
                                                step={step}
                                        />
                                );
                        } else {
                                blocks.push(
                                        <SequenceBlock
                                                key={i}
                                                index={i}
                                                dataRow={index}
                                                dataActive={false}
                                                updateSequence={updateSequence}
                                                step={step}
                                        />
                                );
                        }
                }
                return blocks;
        }

        const seqBlocks = genBlocks();

        return (
                <Row step={step} index={index}>
                        <span>{index + 1}</span>
                        {seqBlocks}
                </Row>
        );
}
