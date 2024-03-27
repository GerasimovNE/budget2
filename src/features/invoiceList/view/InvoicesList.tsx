import React from 'react';
import { InvoiceItem } from './parts/InvoiceItem';
import { InvoiceCreateModal } from './containers/InvoiceCreateModal';
import { useStore } from 'effector-react';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import styled from 'styled-components';
import {
    $invoices,
    getInvoicesFx,
    openCreateModal,
    $isOpenCreateModal,
    closeCreateModal,
} from '../model/private';

export const InvoicesList = () => {
    const invoices = useStore($invoices);
    const isOpenModal = useStore($isOpenCreateModal);
    React.useEffect(() => {
        getInvoicesFx();
    }, []);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpenModal, closeRef, () => closeCreateModal());

    return (
        <div>
            <Container>
                <div ref={closeRef}>
                    <button onClick={() => openCreateModal()}>add</button>
                    <InvoiceCreateModal />
                </div>
            </Container>
            <Container>
                {invoices!.map((invoice) => (
                    <InvoiceItem key={invoice.id} {...invoice} />
                ))}
            </Container>
        </div>
    );
};

const Container = styled.div`
    margin: 10px;
`;
