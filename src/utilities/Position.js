import { css } from 'styled-components';

// CSS Helper
// Needed for props in mixins
export const fixedTop = css`
        position: fixed;
        top: 0;
        left: 0;
`;

export const centerAbsolute = css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
`;
