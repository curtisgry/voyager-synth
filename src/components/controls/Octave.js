import React, { useContext } from 'react';
import { ScaleContext } from '../../context/ScaleContext';
import { OctaveButton, ControlContainer } from '../../elements';

import { ControlDetail, ControlTitle } from '../../elements/Headings';

export default function Octave() {
        const { octave, increaseOctave, decreaseOctave } = useContext(ScaleContext);
        return (
                <ControlContainer>
                        <ControlTitle>Octave</ControlTitle>
                        <OctaveButton onClick={decreaseOctave}>-</OctaveButton>
                        <ControlDetail>{octave}</ControlDetail>
                        <OctaveButton onClick={increaseOctave}>+</OctaveButton>
                </ControlContainer>
        );
}
