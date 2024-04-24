import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { deleteInvoiceEvent, changeInvoiceEvent } from '../../model/private';

export const Buttons = () => {
    return (
        <Container>
            <Button onClick={() => deleteInvoiceEvent()}>delete</Button>
            <Button onClick={() => changeInvoiceEvent()}>change</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 350px) {
        padding: 20px;
    }
    @media (min-width: 768px) {
        padding: 20px 40px;
    }
`;
