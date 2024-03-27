import React from 'react';
import styled from 'styled-components';
import { deleteInvoiceFx } from '../../model/private';
import { Invoice } from '@/interface';

export const InvoiceItem: React.FC<Invoice> = (invoice) => {
    return (
        <Container>
            <p>{invoice.name}</p>
            <p>{invoice.type}</p>
            <p>{invoice.cost}</p>
            <button
                onClick={() => deleteInvoiceFx(invoice.id ? invoice.id : -1)}
            >
                delete
            </button>
        </Container>
    );
};

const Container = styled.div`
    padding: 10px;
    border-radius: 6px;
    border-color: #000;
    font-size: 16px;
    margin: 10px;
    box-shadow: 0px 0px 5px black;
`;
