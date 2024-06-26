import styled from 'styled-components';

export const Input = styled.input`
    border: none;

    background-color: var(--color-background);
    border-radius: 30px;
    color: var(--color-text);
    font-size: 20px;
    padding: 5px;
    font-family: nunito;

    &::file-selector-button {
        display: none;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:disabled {
        opacity: 0.5;
    }
    &:focus {
        outline: 1px solid var(--color-border-line);
    }
`;
