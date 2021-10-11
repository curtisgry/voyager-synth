import styled from 'styled-components';

export const FlexRow = styled.div`
        width: 80%;
        margin: 0 auto;

        display: flex;

        row-gap: 1rem;
        column-gap: 1rem;
        justify-content: ${(props) => props.justify};
        /* align-items: center; */
        margin-bottom: 2rem;

        @media (max-width: 1200px) {
                flex-wrap: wrap;
                width: 90%;
        }

        @media (max-width: 700px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 70%;
        }
`;

export const FlexRowKey = styled.div`
        width: 80%;
        margin: 0 auto;

        display: flex;

        row-gap: 1rem;
        column-gap: 1rem;
        justify-content: ${(props) => props.justify};
        /* align-items: center; */
        margin-bottom: 2rem;

        @media (max-width: 1200px) {
                flex-wrap: wrap;
                width: 90%;
        }

        @media (max-width: 700px) {
                width: 80%;
        }
`;

export const FlexRowSequence = styled.div`
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        row-gap: 1rem;
        justify-content: ${(props) => props.justify};
        /* align-items: center; */
        margin-bottom: 2rem;

        @media (max-width: 1200px) {
                width: 90%;
        }
`;

export const FlexCol = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`;
