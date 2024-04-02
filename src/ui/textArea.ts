import styled from 'styled-components';

export const TextArea = styled.textarea`
    border: none;
    background-color: var(--color-background);
    border-radius: 15px;
    height: 60px;
    width: 100%;
    color: var(--color-text);
    font-size: 16px;
    resize: none;
    padding: 5px;
    font-family: nunito;
    &:focus {
        outline: 1px solid var(--color-border-line);
    }
`;
