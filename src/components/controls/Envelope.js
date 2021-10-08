import React from 'react';

import { ControlDetail, ControlTitle } from '../../elements/Headings';
import { ControlContainer, Range } from '../../elements';
import Knob from '../input/Knob';

export default function Envelope({ attack, release, updateAttack, updateRelease }) {
        return (
                <ControlContainer>
                        <ControlTitle>Envelope</ControlTitle>
                        <div>
                                <ControlDetail>Attack</ControlDetail>
                                {/* <Range
                                        type="range"
                                        name="attack"
                                        value={attack}
                                        onChange={updateAttack}
                                        min={0.01}
                                        max={1}
                                        step={0.01}
                                /> */}
                                <Knob min={0.01} max={1} step="0.01" value={attack} onChange={updateAttack} />
                        </div>

                        <div>
                                <ControlDetail>Release</ControlDetail>
                                <Range
                                        type="range"
                                        name="release"
                                        value={release}
                                        onChange={updateRelease}
                                        min={0.1}
                                        max={2}
                                        step={0.01}
                                />
                        </div>
                </ControlContainer>
        );
}
