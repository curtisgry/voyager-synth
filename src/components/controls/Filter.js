import React, { useContext, useState, useEffect } from 'react';
import SynthContext from '../../context/SynthContext';
import { ControlDetail, ControlTitle, ControlContainer, ControlSubContainer, Range } from '../../elements';
import { ControlsToggleButton } from '../../elements/Buttons';

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
                                <ControlsToggleButton toggle={filter} onClick={toggleFilter}>
                                        {filter ? 'On' : 'Off'}
                                </ControlsToggleButton>
                        </ControlSubContainer>
                        <ControlSubContainer>
                                <ControlTitle style={{ marginBottom: 0 }}>Frequency</ControlTitle>
                                <ControlDetail>{freq}Hz</ControlDetail>
                                <Range
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
