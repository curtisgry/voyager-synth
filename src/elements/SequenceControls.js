import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import SynthContext from '../context/SynthContext';
import { FlexRow } from '../utilities';
import { ControlContainer } from './Controls';

const ControlsButton = styled.button``;

const TempoInput = styled.input`
        width: 50px;
`;

export default function SequenceControls({
        isPlaying,
        togglePlaying,
        tempo,
        changeTempo,
        playSequence,
        verbTime,
        updateVerbTime,
        reverse,
        toggleReverse,
        reverb,
        toggleReverb,
        filter,
        toggleFilter,
}) {
        const [freq, setFreq] = useState(400);
        const synth = useContext(SynthContext);

        function updateFreq(e) {
                const nextFreq = parseFloat(e.target.value);

                setFreq(nextFreq);
                synth.addFilter(freq);
        }

        return (
                <FlexRow justify="space-evenly">
                        <ControlContainer>
                                <h3>Tempo</h3>
                                <TempoInput type="number" value={tempo} onChange={changeTempo} />
                        </ControlContainer>
                        <ControlContainer>
                                <h3>Reverb</h3>
                                <div>
                                        <ControlsButton onClick={toggleReverb}>{reverb ? 'On' : 'Off'}</ControlsButton>
                                </div>
                                <div>
                                        <label htmlFor="time">Time</label>
                                        <input
                                                type="range"
                                                name="time"
                                                value={verbTime}
                                                onChange={updateVerbTime}
                                                min={0.5}
                                                max={10}
                                                step={0.01}
                                        />
                                </div>
                        </ControlContainer>
                        <ControlContainer>
                                <h3>Filter</h3>
                                <div>
                                        <ControlsButton onClick={toggleFilter}>{filter ? 'On' : 'Off'}</ControlsButton>
                                </div>
                                <div>
                                        <label htmlFor="time">Frequency: {freq}</label>
                                        <input
                                                className="absolute"
                                                type="range"
                                                name="time"
                                                value={freq}
                                                onChange={updateFreq}
                                                min={50}
                                                max={10000}
                                                step={1}
                                        />
                                </div>
                        </ControlContainer>
                        <ControlContainer>
                                <ControlsButton
                                        onClick={() => {
                                                togglePlaying();
                                                setTimeout(() => {
                                                        playSequence();
                                                }, 0);
                                        }}
                                >
                                        {isPlaying ? 'Stop' : 'Play'}
                                </ControlsButton>
                        </ControlContainer>
                </FlexRow>
        );
}
