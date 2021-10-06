import React from 'react';
import { TempoInput, ControlTitle, ControlContainer } from '../../elements';

export default function Tempo({ tempo, changeTempo }) {
        return (
                <ControlContainer>
                        <ControlTitle htmlFor="tempo">Tempo</ControlTitle>
                        <TempoInput type="number" value={tempo} onChange={changeTempo} />
                </ControlContainer>
        );
}
