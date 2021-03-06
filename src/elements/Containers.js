import styled from 'styled-components';

export const ControlContainer = styled.div`
        display: flex;
        width: 23%;
        justify-content: center;
        align-items: center;

        ${({ flow }) => flow === 'column' && 'flex-direction: column'};
`;

export const ControlSubContainer = styled.div`
        width: 100%;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
`;

export const Row = styled.div`
        display: flex;
        flex-direction: column-reverse;

        background-color: transparent;
        border-radius: 100px;
        transition: all 0.05s;
        position: relative;

        span {
                margin-bottom: 0.5rem;
        }
`;

export const HelpContainer = styled.div`
        width: 25%;
        display: flex;
        padding: 2rem;
`;
