import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexRow, teal, veryDarkPurple } from '../utilities';

const OctaveButton = styled.button`
        font-size: 1.5rem;
        padding: 0.5rem 0.5rem;
        background-color: #541388;
        border: none;
        border-radius: 2px;
`;
export const ControlContainer = styled.div`
        width: 30%;
        height: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        ${({ flow }) => flow === 'column' && 'flex-direction: column'};

        div {
                width: 100%;
                display: flex;
                flex-direction: column-reverse;
                justify-content: space-between;
                align-items: center;

                input {
                        width: 30%;
                }

                label {
                        color: ${teal};
                }

                p {
                        color: ${teal};
                }
        }
        h3 {
                color: ${teal};
        }
        h5 {
                display: block;
                color: ${teal};
        }
`;

const WaveSelect = styled.select`
        font-size: 1.5rem;
        color: ${teal};
        background-color: ${veryDarkPurple};
`;

export default function Controls({
        octave,
        increaseOctave,
        decreaseOctave,
        wave,
        changeWave,
        attack,
        updateAttack,
        sustain,
        updateSustain,
        release,
        updateRelease,
}) {
        return (
                <FlexRow justify="space-evenly">
                        <ControlContainer>
                                <h3>Octave</h3>
                                <OctaveButton onClick={decreaseOctave}>-</OctaveButton>
                                <h3>{octave}</h3>
                                <OctaveButton onClick={increaseOctave}>+</OctaveButton>
                        </ControlContainer>
                        <ControlContainer>
                                <h3>Wave Form</h3>
                                <WaveSelect name="wave" value={wave} onChange={changeWave}>
                                        <option value="square">Square</option>
                                        <option value="sine">Sine</option>
                                        <option value="sawtooth">Sawtooth</option>
                                        <option value="triangle">Triangle</option>
                                </WaveSelect>
                        </ControlContainer>
                        <ControlContainer>
                                <h3>Envelope</h3>
                                <div>
                                        <label htmlFor="attack">Attack</label>
                                        <input
                                                type="range"
                                                name="attack"
                                                value={attack}
                                                onChange={updateAttack}
                                                min={0.01}
                                                max={0.5}
                                                step={0.01}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="sustain">Length</label>
                                        <input
                                                type="range"
                                                name="sustain"
                                                value={sustain}
                                                onChange={updateSustain}
                                                min={0.01}
                                                max={1}
                                                step={0.01}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="release">Release</label>
                                        <input
                                                type="range"
                                                name="release"
                                                value={release}
                                                onChange={updateRelease}
                                                min={0.01}
                                                max={1}
                                                step={0.01}
                                        />
                                </div>
                        </ControlContainer>
                </FlexRow>
        );
}
