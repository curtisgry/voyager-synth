import React from 'react';
import { ControlTitle } from '../../elements/Headings';

import { ControlSelect } from '../../elements/Inputs';
import { ControlContainer } from '../../utilities';

export default function Scale({ scale, changeScale }) {
        return (
                <ControlContainer>
                        <ControlTitle>Scale</ControlTitle>
                        <ControlSelect name="scale" value={scale} onChange={changeScale}>
                                <option value="cMaj">Cmaj</option>
                                <option value="cMin">Cmin</option>
                        </ControlSelect>
                </ControlContainer>
        );
}
