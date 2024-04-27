import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import { $isOpenDbModal } from '../../model/private';
import { dbModalToogle } from '../../model/public';
import { FileForm, Buttons } from '../containers';

export const DBModal = () => {
    const isOpen = useStore($isOpenDbModal);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, dbModalToogle, 'db');

    return (
        <Container ref={closeRef} isOpen={isOpen}>
            <FileForm />
            <Buttons />
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    height: 150px;
    top: 86px;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color-text);
    background-color: var(--color-primary);
    border-radius: 40px;
    box-shadow: 0px 0px 5px var(--color-text);
    font-size: 16px;
    padding: 40px;
    width: 250px;
`;
