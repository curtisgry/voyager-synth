import styled, { css } from 'styled-components';
import { darkPurple, lightPurple2, magenta, pinkGlow, teal, veryDarkPurple } from '../utilities';

export const ControlSelect = styled.select`
        font-size: 1.5rem;
        color: ${teal};
        background-color: ${veryDarkPurple};
        border-radius: 4px;
        border: none;
        margin-right: 1rem;
`;

export const TempoInput = styled.input`
        font-family: inherit;
        text-align: center;
        border: none;
        border-radius: 4px;
        padding: 10px;
        width: 100px;

        @media (max-width: 1200px) {
                padding: 3px;
        }
`;

export const Block = styled.div`
        height: 30px;
        width: 30px;
        background-color: ${darkPurple};
        border-radius: 3px;
        margin-bottom: 1rem;
        position: relative;
        @media (max-width: 1200px) {
                width: 18px;
                height: 18px;
        }

        @media (max-width: 320px) {
                width: 15px;
                height: 15px;
        }

        ${({ dataActive }) =>
                dataActive === true &&
                css`
                        background-color: ${lightPurple2};
                `}

        ${({ step, row }) =>
                step === row &&
                css`
                        background-color: ${magenta};
                        box-shadow: 0 0 15px ${pinkGlow};
                        &:before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                border-radius: 10px;
                                background: ${pinkGlow};
                                transition: 0.2s;
                                box-shadow: 0 0 15px ${pinkGlow};
                                filter: blur(3px);
                                z-index: -1;
                        }
                `}

    ${({ step, row, dataActive }) => {
                if (step === row && dataActive === true) {
                        return css`
                                background-color: ${teal};
                                box-shadow: 0 0 30px ${teal};
                                &:before {
                                        content: '';
                                        position: absolute;
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
                        `;
                }
        }}
`;

export const ScaleDisplay = styled.div`
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        position: absolute;
        left: 10%;
        margin-top: 0.3rem;
        height: 344px;
        color: ${teal};

        h4 {
                margin: 0;
        }

        @media (max-width: 1200px) {
                left: 5px;
                font-size: 0.7rem;
                height: 208px;
        }

        @media (max-width: 320px) {
                height: 185px;
        }
`;

export const Range = styled.input`
        width: 80px;
`;

export const DialSvg = styled.svg.attrs(({ offset }) => ({
        strokeDashoffset: offset,
}))`
        stroke: ${teal};
        width: 100%;
        stroke-dasharray: 189px;
`;
