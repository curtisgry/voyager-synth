import React, { useContext, useState, useEffect } from 'react';
import SynthContext from '../../context/SynthContext';
import { ControlDetail, ControlTitle } from '../../elements';
import { ControlsToggleButton } from '../../elements/Buttons';
import { ControlContainer, ControlSubContainer } from '../../utilities';

export default function Filter({ filter, toggleFilter }) {
        const synth = useContext(SynthContext);
        const [freq, setFreq] = useState(400);

        function updateFreq(e) {
                const nextFreq = parseFloat(e.target.value);

                setFreq(nextFreq);
                synth.addFilter(freq);
        }

        useEffect(() => {
                synth.filter = filter;
        }, [filter]);

        return (
                <ControlContainer>
                        <ControlTitle>Filter</ControlTitle>
                        <ControlSubContainer>
                                <ControlsToggleButton className={filter ? 'toggled' : ''} onClick={toggleFilter}>
                                        {filter ? 'On' : 'Off'}
                                </ControlsToggleButton>
                        </ControlSubContainer>
                        <ControlSubContainer>
                                <ControlTitle>Frequency</ControlTitle>
                                <ControlDetail style={{ fontSize: '1rem', position: 'absolute' }} htmlFor="time">
                                        {freq}
                                </ControlDetail>
                                <input
                                        type="range"
                                        name="time"
                                        value={freq}
                                        onChange={updateFreq}
                                        min={50}
                                        max={10000}
                                        step={1}
                                />
                        </ControlSubContainer>
                </ControlContainer>
        );
}
