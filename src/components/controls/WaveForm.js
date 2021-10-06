import React, { useState, useContext } from 'react';
import SynthContext from '../../context/SynthContext';

import { ControlTitle, ControlSelect, ControlContainer } from '../../elements';

export default function WaveForm() {
        const synth = useContext(SynthContext);
        const [wave, setWave] = useState('square');
        function changeWave(e) {
                setWave(e.target.value);
                synth.wave = wave;
        }
        synth.wave = wave;
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
