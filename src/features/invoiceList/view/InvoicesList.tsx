import React from 'react';
import { InvoiceItem } from './parts/InvoiceItem';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { $invoices, getInvoicesFx } from '../model/private';

export const InvoicesList = () => {
    const invoices = useStore($invoices);
    React.useEffect(() => {
        getInvoicesFx();
    }, []);

    return (
        <Container>
            {invoices!.map((invoice) => (
                <InvoiceItem key={invoice.id} {...invoice} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    min-width: 450px;
    max-width: 600px;
    padding-top: 100px;
    padding-bottom: 30px;
`;
