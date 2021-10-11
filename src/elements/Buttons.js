import styled, { css } from 'styled-components';
import { baseFont, darkPurple, indigo, lightPurple, lightPurple2, teal } from '../utilities';

export const OctaveButton = styled.button`
        display: inline-block;
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

export const ControlsToggleButton = styled.button`
        cursor: pointer;
        color: black;
        background-color: ${lightPurple};
        border: none;
        padding: 10px 15px;
        font-size: 1.4rem;
        border-radius: 4px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
        margin-right: 1rem;
        transition: all 0.3s;

        ${({ toggle }) =>
                toggle &&
                css`
                        background-color: #791e94;

                        text-shadow: 0 0 15px #2de2e6;
                        color: ${teal};
                        box-shadow: 0 0 30px ${teal};
                        &:before {
                                content: '';

                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                border-radius: 10px;
                                background: ${teal};
                                transition: 0.2s;
                                box-shadow: 0 0 15px ${teal};
                                filter: blur(3px);
                                z-index: -1;
                        }
                `}

        @media (max-width: 1200px) {
                padding: 3px;
        }
`;

export const KeyButton = styled.div`
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

export const HelpButton = styled.button`
        border-radius: 50%;
        cursor: pointer;
        border: none;
        background-color: ${lightPurple2};

        &:hover {
                background-color: ${lightPurple};
                color: ${teal};
        }
`;
