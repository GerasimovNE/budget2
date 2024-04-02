import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--color-background);
    border: none;
    border-radius: 30px;
    width: fit-content;
    color: var(--clor-text);
    font-family: nunito;
    font-size: 20px;
    padding: 10px;
    box-shadow: 0px 0px 5px var(--color-border-line);
    &:hover {
        background-color: var(--color-hover);
        cursor: pointer;
    }
`;
