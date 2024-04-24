import React from 'react';
import styled from 'styled-components';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import { useStore } from 'effector-react';
import { $isOpenModalChange, $invoice } from '../../model/private';
import { changeModalToggle } from '../../model/public';
import { MainForm, TagsForm, AdditionalForm, Buttons } from '../containers';

export const InvoiceChangeModal = () => {
    const isOpen = useStore($isOpenModalChange);
    const invoice = useStore($invoice);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, changeModalToggle, `${invoice?.id}`);

    return (
        <Container ref={closeRef} isOpen={isOpen}>
            <FormCont>
                <MainForm />
                <TagsForm />
                <AdditionalForm />
            </FormCont>

            <Buttons />
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    height: 87vh;
    top: 86px;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color-text);
    background-color: var(--color-primary);
    border-radius: 40px;
    box-shadow: 0px 0px 5px var(--color-text);
    font-size: 16px;

    @media (min-width: 350px) {
        width: 310px;
    }
    @media (min-width: 768px) {
        width: 570px;
    }
`;

const FormCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    @media (min-width: 350px) {
        padding: 20px;
    }
    @media (min-width: 768px) {
        padding: 20px 40px;
    }
`;
