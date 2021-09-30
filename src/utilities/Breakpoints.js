import { css } from 'styled-components';

// breakpoint sizes for media queries
export const sizes = {
        small: 400,
        medium: 960,
        large: 1140,
};

// for ems change px to em and divide value by 16 . ${sizes[label] / 16}em
export const above = Object.keys(sizes).reduce((acc, label) => {
        acc[label] = (...args) => css`
                @media (min-width: ${sizes[label]}px) {
                        ${css(...args)}
                }
        `;
        return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
        acc[label] = (...args) => css`
                @media (max-width: ${sizes[label]}px) {
                        ${css(...args)}
                }
        `;
        return acc;
}, {});
