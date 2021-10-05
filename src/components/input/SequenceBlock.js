import React from 'react';
import { Block } from '../../elements';

export default function SequenceBlock({ dataActive, updateSequence, index, dataRow, step }) {
        return (
                <Block
                        onClick={updateSequence}
                        dataActive={dataActive}
                        data-index={index}
                        data-row={dataRow}
                        row={dataRow}
                        step={step}
                />
        );
}
