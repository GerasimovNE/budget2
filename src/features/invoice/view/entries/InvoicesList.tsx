import React from 'react';
import { InvoiceItem } from '../parts';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { $invoices, getInvoicesEvent } from '../../model';
import { PaginationBar } from '../containers';

export const InvoicesList = () => {
    const invoices = useStore($invoices);
    React.useEffect(() => {
        getInvoicesEvent();
    }, []);

    return (
        <Container>
            {invoices?.map((invoice) => (
                <InvoiceItem key={invoice.id} {...invoice} />
            ))}
            <PaginationBar />
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
