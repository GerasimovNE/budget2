import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Button } from '@/ui/button';
import { createModalToggle } from '@/features/invoice-create-modal/modal';
import { SearchOutlined } from '@ant-design/icons';
import { setSearch } from '../../model/private';
import { $search, searchEvent } from '../../model/public';
import { filtModalToggle } from '@/features/filter-bar/model/public';

export const NavBar = () => {
    const search = useStore($search);
    return (
        <Container>
            <Wrapper>
                <div>Budget</div>
                <InputCont>
                    <Input
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SearchOutlined onClick={() => searchEvent()} />
                </InputCont>
                <Button id="filter" onClick={() => filtModalToggle()}>
                    filt
                </Button>
                <Button id="create" onClick={() => createModalToggle()}>
                    add
                </Button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-border-line);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 600px;
    min-width: 450px;
    font-weight: bolder;
    font-size: 28px;
    margin: 18px;
    color: var(--color-text);
`;

const Input = styled.input`
    border: none;
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 20px;
    padding: 5px;
    font-family: nunito;
    &:focus {
        outline: none;
    }
`;
const InputCont = styled.div`
    background-color: var(--color-background);
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    gap: 5px;
    &:has(input:focus) {
        border: 1px solid var(--color-border-line);
    }
`;
