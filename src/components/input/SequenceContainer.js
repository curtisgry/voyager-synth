import React from 'react';
import { ScaleDisplay } from '../../elements';
import { FlexRowSequence } from '../../utilities';
import SequenceRow from './SequenceRow';

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
