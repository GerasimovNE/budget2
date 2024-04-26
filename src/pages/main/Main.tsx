import React from 'react';
import { NavBar } from '@/features/app/view';
import { InvoicesList } from '@/features/invoice/view';
import { InvoiceCreateModal } from '@/features/invoice-create-modal/view';
import { InvoiceChangeModal } from '@/features/invoice-change/view/entries';
import { FilterBar } from '@/features/filter-bar/view/entries/FilterBar';
import { SummaryModal } from '@/features/summary/view/entries/SummaryModal';
import styled from 'styled-components';

export const Main = () => {
    return (
        <div>
            <NavBar />
            <Body>
                <SummaryModal />
                <FilterBar />
                <InvoiceCreateModal />
                <InvoiceChangeModal />
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
