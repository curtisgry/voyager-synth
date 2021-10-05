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
