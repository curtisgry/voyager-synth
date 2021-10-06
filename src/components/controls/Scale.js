import React, { useContext } from 'react';
import { ScaleContext } from '../../context/ScaleContext';
import { ControlTitle, ControlSelect, ControlContainer } from '../../elements';

export default function Scale() {
        const { scaleData, key, curScaleType, changeScale, changeKey } = useContext(ScaleContext);

        return (
                <ControlContainer>
                        <ControlTitle>Scale</ControlTitle>
                        <ControlSelect name="scale" value={key} onInput={changeKey}>
                                {scaleData.rootNotes.map((note) => (
                                        <option key={note} value={note}>
                                                {note}
                                        </option>
                                ))}
                        </ControlSelect>
                        <ControlSelect name="key" value={curScaleType} onChange={changeScale}>
                                <option value="minor">Minor</option>
                                <option value="major">Major</option>
                        </ControlSelect>
                </ControlContainer>
        );
}
