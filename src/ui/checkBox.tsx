import styled from 'styled-components';
import React from 'react';
import { Event } from 'effector';

type Props = {
    cheked: boolean;
    setter: Event<boolean>;
};
export const CheckBox: React.FC<Props> = (props) => {
    return (
        <Label>
            <Input
                type="checkbox"
                checked={props.cheked}
                onChange={(e) => props.setter(e.target.checked)}
            />
        </Label>
    );
};

const Input = styled.input`
    display: none;
`;

const Label = styled.label`
    background-color: var(--color-background);
    box-shadow: 0px 0px 5px var(--color-border-line);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        background-color: var(--color-background);
        box-shadow: none;
    }
    &:has(input:checked)::after {
        width: 10px;
        height: 10px;
        box-shadow: 0px 0px 5px var(--color-text);
        border-radius: 50%;
        background-color: var(--color-text);
        transition: background-color 0.5;
    }
`;