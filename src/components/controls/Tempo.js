import React from 'react';
import { TempoInput } from '../../elements';
import { ControlTitle } from '../../elements/Headings';
import { ControlContainer } from '../../utilities';

export default function Tempo({ tempo, changeTempo }) {
        return (
                <ControlContainer>
                        <ControlTitle htmlFor="tempo">Tempo</ControlTitle>
                        <TempoInput type="number" value={tempo} onChange={changeTempo} />
                </ControlContainer>
        );
}
