import styled from 'styled-components';
import { lightPurple, teal } from '../utilities';

export const GuideList = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: space-space-evenly;
        color: ${teal};
        padding: 2rem;
        margin-top: 10px;
        font-size: 0.8rem;
        text-align: left;
        width: 40%;
        background-color: ${lightPurple};
        position: absolute;
        top: 3%;

        z-index: 1000;

        transition: all 0.2s;
        border-radius: 4px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);

        ${({ toggle }) => {
                if (toggle) {
                        return `opacity: 1;`;
                }
                return `opacity: 0;`;
        }}
        @media (min-width: 649px) {
                top: 8%;
        }
`;
