import styled from 'styled-components';
import { centerAbsolute } from '../utilities';

export const AppHeader = styled.header`
        pointer-events: none;
        width: 100%;
        height: 140px;
        position: relative;
        .logo {
                ${centerAbsolute};
                top: 60%;
        }
        @media (max-width: 1200px) {
                height: 100px;
                .logo {
                        ${centerAbsolute};
                        top: 70%;
                }
        }
`;

export const CornerImage = styled.img`
        width: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;

        @media (max-width: 1200px) {
                display: none;
        }
`;

export const BgGif = styled.img`
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
        background-color: teal;
        filter: hue-rotate(90deg);
        z-index: -1;
        @media (max-width: 1200px) {
                display: none;
        }
`;
