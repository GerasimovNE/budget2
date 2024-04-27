import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { $isOpenBurger, burgerToggle } from '../../model/private';
import { filtModalToggle } from '@/features/filter-bar/model/public';
import { summaryModalToggle } from '@/features/summary/model/public';
import { createModalToggle } from '@/features/invoice-create-modal/modal';
import { dbModalToogle } from '@/features/data-base/model/public';

export const BurgerMenu = () => {
    const isOpen = useStore($isOpenBurger);

    return (
        <Container isOpen={isOpen}>
            <div
                id="summary"
                onClick={() => {
                    summaryModalToggle();
                    burgerToggle();
                }}
            >
                Summary
            </div>
            <Hr />
            <div
                id="db"
                onClick={() => {
                    dbModalToogle();
                    burgerToggle();
                }}
            >
                Database
            </div>
            <Hr />
            <div
                id="filter"
                onClick={() => {
                    filtModalToggle();
                    burgerToggle();
                }}
            >
                Filt
            </div>
            <Hr />
            <div
                id="create"
                onClick={() => {
                    createModalToggle();
                    burgerToggle();
                }}
            >
                Create
            </div>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border-line);
    transform: translateX(-112px);
`;
const Hr = styled.hr`
    color: var(--color-borderline);
    width: 100%;
    margin: 0px;
`;
