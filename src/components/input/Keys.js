import React from 'react';
import { KeyText } from '../../elements';
import { KeyButton } from '../../elements/Buttons';

export default function Key({ keyPressed, keyValue, note, handleMouseDown, handleMouseUp }) {
        const findKey = keyPressed.find((key) => key === keyValue);

        return (
                <KeyButton
                        className={findKey ? 'on' : ''}
                        data-keyval={keyValue}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                >
                        <KeyText>{note}</KeyText>
                </KeyButton>
        );
}
