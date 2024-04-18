import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { FilterForm } from '../containers';
import { useStore } from 'effector-react';
import {
    resetFilterParams,
    setFilterParams,
    $isOpenModal,
} from '../../model/private';
import { filtModalToggle } from '../../model/public';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';

export const FilterBar = () => {
    const isOpen = useStore($isOpenModal);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, filtModalToggle, 'filter');
    return (
        <Container isOpen={isOpen} ref={closeRef}>
            <FilterForm />
            <ButtonCont>
                <Button onClick={() => setFilterParams()}>filter</Button>
                <Button onClick={() => resetFilterParams()}>reset</Button>
            </ButtonCont>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    position: absolute;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    top: 90px;
    height: 75%;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color-text);
    background-color: var(--color-primary);
    width: 380px;
    padding: 25px;
    font-size: 16px;
    border-radius: 40px;
    box-shadow: 0px 0px 5px var(--color-text);
`;

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-between;
`;
