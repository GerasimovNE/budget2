import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { createInvoiceEvent } from '../../modal';

export const Buttons = () => {
    return (
        <Container>
            <Button onClick={() => createInvoiceEvent()}>add</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: end;
    @media (min-width: 350px) {
        padding: 20px;
    }
    @media (min-width: 768px) {
        padding: 20px 40px;
    }
`;
