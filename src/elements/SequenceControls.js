import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SynthContext from '../context/SynthContext';
import { FlexRow, teal } from '../utilities';
import { ControlContainer } from './Controls';

const ControlsButton = styled.button`
        cursor: pointer;
        color: black;
        background-color: #540d6e;
        border: none;
        padding: 10px 15px;
        font-size: 1.4rem;
        border-radius: 4px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);

        transition: all 0.3s;

        @media (max-width: 1200px) {
                padding: 3px;
        }
`;

const TempoInput = styled.input`
        font-family: inherit;
        text-align: center;
        border: none;
        border-radius: 4px;
        padding: 10px;

        @media (max-width: 1200px) {
                padding: 3px;
        }
`;

export default function SequenceControls({
        isPlaying,
        togglePlaying,
        tempo,
        changeTempo,
        playSequence,
        reverb,
        toggleReverb,
        filter,
        toggleFilter,
}) {
        const [freq, setFreq] = useState(400);
        const synth = useContext(SynthContext);

        const [verbDecay, setVerbDecay] = useState(10);
        const [verbTime, setVerbTime] = useState(5);

        function updateFreq(e) {
                const nextFreq = parseFloat(e.target.value);

                setFreq(nextFreq);
                synth.addFilter(freq);
        }

        // function updateVerbDecay(e) {
        //         const nextDecayTime = parseFloat(e.target.value);

        //         setVerbDecay(nextDecayTime);
        // }

        function updateVerbTime(e) {
                const nextVerbTime = parseFloat(e.target.value);

                setVerbTime(nextVerbTime);
                synth.generateImpulse({ seconds: verbTime });
        }

        useEffect(() => {
                synth.generateImpulse({ seconds: verbTime, decay: verbDecay });
                synth.reverb = reverb;
                synth.filter = filter;
        }, [reverb, filter]);

        return (
                <FlexRow justify="space-evenly">
                        <ControlContainer>
                                <label htmlFor="tempo">Tempo</label>
                                <TempoInput type="number" value={tempo} onChange={changeTempo} />
                        </ControlContainer>
                        <ControlContainer>
                                <label htmlFor="reverb">Reverb</label>
                                <div>
                                        <ControlsButton className={reverb ? 'toggled' : ''} onClick={toggleReverb}>
                                                {reverb ? 'On' : 'Off'}
                                        </ControlsButton>
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
                                <label htmlFor="filter">Filter</label>
                                <div>
                                        <ControlsButton className={filter ? 'toggled' : ''} onClick={toggleFilter}>
                                                {filter ? 'On' : 'Off'}
                                        </ControlsButton>
                                </div>
                                <div style={{ position: 'relative' }}>
                                        <h3>Frequency</h3>
                                        <label style={{ fontSize: '1rem', position: 'absolute' }} htmlFor="time">
                                                {freq}
                                        </label>
                                        <input
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
                                        className={isPlaying ? 'toggled' : ''}
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
