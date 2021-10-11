import React, { useContext, useState, useEffect } from 'react';
import SynthContext from '../../context/SynthContext';
import { ControlDetail, ControlTitle, ControlContainer, ControlSubContainer, Range } from '../../elements';
import { ControlsToggleButton } from '../../elements/Buttons';
import Knob from '../input/Knob';

export default function Filter({ filter, toggleFilter, min }) {
        const synth = useContext(SynthContext);
        const [freq, setFreq] = useState(300);

        function updateFreq(e, val = null) {
                if (!val) {
                        const nextFreq = parseFloat(e.target.value);

                        setFreq(nextFreq);
                        synth.addFilter(freq);
                } else if (val > min) {
                        const nextFreq = parseFloat(val);
                        setFreq(nextFreq);
                        synth.addFilter(freq);
                }
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
                                <Knob
                                        title="Frequency"
                                        valueDetail="Hz"
                                        value={freq}
                                        min={200}
                                        max={2000}
                                        step="10"
                                        onChange={updateFreq}
                                />
                        </ControlSubContainer>
                </ControlContainer>
        );
}
