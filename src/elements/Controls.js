import React from 'react';
import styled from 'styled-components';
import { FlexRow, lightPurple, teal, veryDarkPurple } from '../utilities';

const OctaveButton = styled.button`
        font-size: 1.5rem;
        padding: 0.5rem 0.5rem;
        margin-right: 1rem;
        margin-left: 1rem;
        background-color: #541388;
        border: none;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
                background-color: ${lightPurple};
        }
`;
export const ControlContainer = styled.div`
        display: flex;

        justify-content: space-between;
        align-items: center;

        ${({ flow }) => flow === 'column' && 'flex-direction: column'};

        label {
                color: ${teal};
                font-size: 1.3rem;
                text-align: center;
                margin-right: 2rem;
        }
        div {
                width: 100%;
                max-width: 150px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                position: relative;

                input {
                        width: 70%;
                }

                label {
                        display: inline-block;
                        margin-left: 2rem;
                }

                p {
                        color: ${teal};
                }
        }
        h3 {
                color: ${teal};
                font-size: 1rem;
                text-align: center;
                margin-bottom: 0;
        }
        h4 {
                color: ${teal};
                font-size: 1.2rem;
                text-align: center;
        }
        h5 {
                display: block;
                color: ${teal};
        }

        .absolute {
                position: absolute;
                top: 40px;
                left: 20px;
        }
`;

const CustomSelect = styled.select`
        font-size: 1.5rem;
        color: ${teal};
        background-color: ${veryDarkPurple};
        border-radius: 4px;
        border: none;
        margin-right: 1rem;
`;

export default function Controls({
        octave,
        increaseOctave,
        decreaseOctave,
        wave,
        changeWave,
        attack,
        updateAttack,

        release,
        updateRelease,
        scale,
        changeScale,
}) {
        return (
                <FlexRow justify="space-evenly">
                        <ControlContainer>
                                <label htmlFor="octave">Octave</label>
                                <OctaveButton onClick={decreaseOctave}>-</OctaveButton>
                                <h4>{octave}</h4>
                                <OctaveButton onClick={increaseOctave}>+</OctaveButton>
                        </ControlContainer>
                        <ControlContainer>
                                <label htmlFor="scale">Scale</label>
                                <CustomSelect name="scale" value={scale} onChange={changeScale}>
                                        <option value="cMaj">Cmaj</option>
                                        <option value="cMin">Cmin</option>
                                </CustomSelect>
                        </ControlContainer>
                        <ControlContainer>
                                <label htmlFor="wave">Wave Form</label>
                                <CustomSelect id="wave" name="wave" value={wave} onChange={changeWave}>
                                        <option value="square">Square</option>
                                        <option value="sine">Sine</option>
                                        <option value="sawtooth">Sawtooth</option>
                                        <option value="triangle">Triangle</option>
                                </CustomSelect>
                        </ControlContainer>
                        <ControlContainer>
                                <label htmlFor="envelope">Envelope</label>
                                <div>
                                        <label htmlFor="attack">Attack</label>
                                        <input
                                                type="range"
                                                name="attack"
                                                value={attack}
                                                onChange={updateAttack}
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
                                                max={2}
                                                step={0.01}
                                        />
                                </div>
                        </ControlContainer>
                </FlexRow>
        );
}
