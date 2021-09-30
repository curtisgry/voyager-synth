import React from 'react';
import styled, { css } from 'styled-components';
import { darkPurple, teal } from '../utilities';

const Block = styled.div`
        height: 30px;
        width: 30px;
        background-color: ${darkPurple};
        border-radius: 3px;
        margin-bottom: 1rem;
        position: relative;

        ${({ dataActive }) =>
                dataActive === true &&
                css`
                        background-color: #791e94;
                `}

        ${({ step, row }) =>
                step === row &&
                css`
                        background-color: #f6019d;
                        box-shadow: 0 0 15px #d40078;
                        &:before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                border-radius: 10px;
                                background: #d40078;
                                transition: 0.2s;
                                box-shadow: 0 0 15px #d40078;
                                filter: blur(3px);
                                z-index: -1;
                        }
                        /* background-color: #d40078; */
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

export default function SequenceBlock({ dataActive, updateSequence, index, dataRow, step }) {
        return (
                <Block
                        onClick={updateSequence}
                        dataActive={dataActive}
                        data-index={index}
                        data-row={dataRow}
                        row={dataRow}
                        step={step}
                />
        );
}
