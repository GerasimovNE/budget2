import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isOpenSummaryModal } from '../../model/private';
import { summaryModalToggle } from '../../model/public';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import { Picker, ButtonAndResult } from '../containers';

export const SummaryModal = () => {
    const closeRef = React.useRef(null);
    const isOpen = useStore($isOpenSummaryModal);
    useCloseModalOnClick(isOpen, closeRef, summaryModalToggle, 'summary');
    return (
        <Container isOpen={isOpen} ref={closeRef}>
            <Picker />
            <ButtonAndResult />
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    height: 50vh;
    top: 86px;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color-text);
    background-color: var(--color-primary);
    border-radius: 40px;
    box-shadow: 0px 0px 5px var(--color-text);
    font-size: 16px;
    padding: 40px;
    width: 310px;
`;
