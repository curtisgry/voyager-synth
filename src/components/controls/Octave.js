import React from 'react';
import { OctaveButton } from '../../elements/Buttons';

import { ControlDetail, ControlTitle } from '../../elements/Headings';
import { ControlContainer } from '../../utilities';

export default function Octave({ octave, decreaseOctave, increaseOctave }) {
        return (
                <ControlContainer>
                        <ControlTitle>Octave</ControlTitle>
                        <OctaveButton onClick={decreaseOctave}>-</OctaveButton>
                        <ControlDetail>{octave}</ControlDetail>
                        <OctaveButton onClick={increaseOctave}>+</OctaveButton>
                </ControlContainer>
        );
}
