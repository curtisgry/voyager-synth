import styled from 'styled-components';
import { teal } from '../utilities';

export const ControlTitle = styled.h3`
        color: ${teal};
        font-size: 1rem;
        text-align: center;
        margin-right: 0.7rem;
`;

export const ControlDetail = styled.h4`
        color: ${teal};
        font-size: 0.8rem;
        text-align: center;
`;

export const KeyText = styled.span`
        pointer-events: none;
        font-size: 2rem;
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
