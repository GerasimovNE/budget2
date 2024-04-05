import styled from 'styled-components';

export const TagElement = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: var(--color-tag);
    border-radius: 40px;
    padding: 10px;
    color: var(--color-text);
    &:has(input:checked) {
        background-color: var(--color-text);
        color: var(--color-background);
    }
`;
