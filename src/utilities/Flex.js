import styled from 'styled-components';

export const FlexRow = styled.div`
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: ${(props) => props.justify};
        /* align-items: center; */
        margin-bottom: 2rem;
`;

export const FlexCol = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`;
