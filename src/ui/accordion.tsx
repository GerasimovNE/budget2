import React from 'react';
import styled from 'styled-components';
import { DownCircleOutlined } from '@ant-design/icons';

type Props = {
    label: string;
};

export const Accordion: React.FC<Props> = (props) => {
    return (
        <Label>
            <Container>
                <div>{props.label}</div>
                <div id="icon">
                    <DownCircleOutlined />
                </div>
            </Container>
            <CheckBox type="checkbox" id="accord" />
            <div id="body">{props.children}</div>
        </Label>
    );
};

const CheckBox = styled.input`
    display: none;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    div[id='body'] {
        display: none;
    }
    &:has(input[id='accord']:checked) div[id='icon'] {
        transform: rotate(180deg);
    }
    &:has(input[id='accord']:checked) div[id='body'] {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;
