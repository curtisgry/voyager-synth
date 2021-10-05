import React from 'react';

import { ControlDetail, ControlTitle } from '../../elements/Headings';
import { ControlContainer } from '../../utilities';

export default function Envelope({ attack, release, updateAttack, updateRelease }) {
        return (
                <ControlContainer>
                        <ControlTitle>Envelope</ControlTitle>
                        <div>
                                <ControlDetail>Attack</ControlDetail>
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
                                <ControlDetail>Release</ControlDetail>
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
        );
}
