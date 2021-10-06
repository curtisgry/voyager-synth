import React, { useContext, useState, useEffect } from 'react';
import SynthContext from '../../context/SynthContext';
import { ControlTitle, ControlsToggleButton, ControlContainer, ControlSubContainer, Range } from '../../elements';

export default function Reverb({ reverb, toggleReverb }) {
        const synth = useContext(SynthContext);
        const [verbDecay, setVerbDecay] = useState(10);
        const [verbTime, setVerbTime] = useState(5);

        function updateVerbTime(e) {
                const nextVerbTime = parseFloat(e.target.value);

                setVerbTime(nextVerbTime);
                synth.generateImpulse({ seconds: verbTime });
        }

        useEffect(() => {
                synth.generateImpulse({ seconds: verbTime, decay: verbDecay });
                synth.reverb = reverb;
        }, [reverb]);

        return (
                <ControlContainer>
                        <ControlTitle>Reverb</ControlTitle>
                        <ControlSubContainer>
                                <ControlsToggleButton toggle={reverb} onClick={toggleReverb}>
                                        {reverb ? 'On' : 'Off'}
                                </ControlsToggleButton>
                        </ControlSubContainer>
                        <ControlSubContainer>
                                <ControlTitle>Time</ControlTitle>
                                <Range
                                        type="range"
                                        name="time"
                                        value={verbTime}
                                        onChange={updateVerbTime}
                                        min={0.5}
                                        max={10}
                                        step={0.01}
                                />
                        </ControlSubContainer>
                </ControlContainer>
        );
}
