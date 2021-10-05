import React from 'react';
import { Row } from '../../utilities';
import SequenceBlock from './SequenceBlock';

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
