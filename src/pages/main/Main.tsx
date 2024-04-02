import React from 'react';
import { NavBar } from '@/features/navBar/view/NavBar';
import { InvoicesList } from '@/features/invoiceList/view';
import { FilterBar } from '@/features/filterBar/view/FilterBar';
import { InvoiceCreateModal } from '@/features/invoiceCreateModal/view/InvoiceCreateModal';
import styled from 'styled-components';

export const Main = () => {
    return (
        <div>
            <NavBar />
            <Body>
                <InvoiceCreateModal />
                <InvoicesList />
            </Body>
        </div>
    );
};

const Body = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;
