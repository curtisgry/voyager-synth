import React from 'react';

import { ControlTitle } from '../../elements/Headings';
import { ControlSelect } from '../../elements/Inputs';
import { ControlContainer } from '../../utilities';

export default function WaveForm({ wave, changeWave }) {
        return (
                <ControlContainer>
                        <ControlTitle>Wave Form</ControlTitle>
                        <ControlSelect id="wave" name="wave" value={wave} onChange={changeWave}>
                                <option value="square">Square</option>
                                <option value="sine">Sine</option>
                                <option value="sawtooth">Sawtooth</option>
                                <option value="triangle">Triangle</option>
                        </ControlSelect>
                </ControlContainer>
        );
}
