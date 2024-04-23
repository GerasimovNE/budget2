import React from 'react';
import styled from 'styled-components';
import {
    $invoice,
    setName,
    setCost,
    setDescription,
} from '../../model/private';
import { Input, TextArea } from '@/ui';
import { useStore } from 'effector-react';

export const MainForm = () => {
    const invoice = useStore($invoice);

    return (
        <Container>
            <Input
                placeholder="name"
                value={invoice.name}
                onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
                placeholder="cost"
                type="number"
                value={invoice.cost}
                disabled={invoice.type == 'task'}
                onChange={(e) => setCost(e.target.value)}
            ></Input>
            <TextArea
                placeholder="description"
                maxLength={255}
                value={invoice.description}
                onChange={(e) => setDescription(e.target.value)}
            ></TextArea>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
