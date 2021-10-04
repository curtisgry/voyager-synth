import React, { useRef } from 'react';
import styled from 'styled-components';
import { baseFont, darkPurple, indigo, lightPurple, teal } from '../utilities';

const KeyButton = styled.div`
        cursor: pointer;
        font-family: ${baseFont};
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${darkPurple};
        border-radius: 5px;
        transition: all 0.3s;
        color: ${indigo};

        &:hover {
                background-color: ${lightPurple};
                color: ${teal};
        }

        &::active {
                background-color: white;
        }

        @media (max-width: 1200px) {
                width: 80px;
                height: 80px;
        }

        @media (max-width: 600px) {
                width: 60px;
                height: 60px;
                font-size: 1rem;
        }
`;

const KeyText = styled.span`
        pointer-events: none;
        font-size: 3rem;
        color: inherit;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        @media (max-width: 600px) {
                font-size: 1.4rem;
        }
`;

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
