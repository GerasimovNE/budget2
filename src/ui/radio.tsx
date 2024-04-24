import styled from 'styled-components';
import React from 'react';
type Props = {
    labels: {
        value: string;
        label: string;
    }[];
    name: string;
    value: string;
    setter: (s: string) => void;
    disabled?: boolean;
};

export const Radio: React.FC<Props> = (props) => {
    const position = props.labels.findIndex(
        (label) => label.value == props.value
    );
    return (
        <Container id={props.name}>
            <Slider length={props.labels.length} position={position} />
            {props.labels.map((label, index) => (
                <Label key={index} length={props.labels.length}>
                    <div>{label.label}</div>
                    <RadioInput
                        disabled={props.disabled}
                        type="radio"
                        name={props.name}
                        value={label.value}
                        checked={props.value == label.value}
                        onChange={(e) => {
                            props.setter(e.target.value);
                        }}
                    />
                </Label>
            ))}
        </Container>
    );
};

const RadioInput = styled.input`
    display: none;
`;

const Container = styled.div`
    display: flex;
    position: relative;
    border-radius: 40px;
    background-color: var(--color-background);
    &:has(input:checked) div {
    }
    &:has(input:disabled) {
        opacity: 0.5;
    }
`;

const Label = styled.label<{ length: number }>`
    margin: 5px;
    padding: 5px;
    width: ${(props) => `calc(100% / ${props.length} )`};
    display: flex;
    justify-content: center;
    z-index: 3;
    &:hover {
        cursor: pointer;
    }
    &:has(input:checked) {
        color: var(--color-background);
    }
`;

const Slider = styled.div<{ length: number; position: number }>`
    background-color: var(--color-text);
    position: absolute;
    top: 5%;
    z-index: 2;
    border-radius: 40px;
    width: ${(props) => `calc(100% / ${props.length} )`};
    height: 90%;
    transform: translateX(${(props) => `calc(100%*${props.position})`});
    transition: transform 0.5s;
`;
