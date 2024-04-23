import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isOpenBurger, burgerToggle } from '../../model/private';
import { BurgerMenu } from '../containers';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { setSearch } from '../../model/private';
import { $search, searchEvent } from '../../model/public';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';

export const NavBar = () => {
    const search = useStore($search);
    const isOpen = useStore($isOpenBurger);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, burgerToggle);
    return (
        <Container>
            <Wrapper>
                <div>Budget</div>
                <InputCont>
                    <Input
                        placeholder="search"
                        value={search}
                        onKeyDown={(key) => {
                            if (key.key == 'Enter') {
                                searchEvent();
                            }
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SearchOutlined onClick={() => searchEvent()} />
                </InputCont>
                <BurgerDiv ref={closeRef}>
                    <BurgerMenu />
                    <MenuOutlined onClick={() => burgerToggle()} />
                </BurgerDiv>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-border-line);
    user-select: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    font-size: 28px;
    margin: 18px;
    color: var(--color-text);
    @media (min-width: 350px) {
        width: 300px;
    }
    @media (min-width: 768px) {
        width: 560px;
    }
`;

const Input = styled.input`
    border: none;
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 20px;
    padding: 5px;
    font-family: nunito;
    user-select: text;
    &:focus {
        outline: none;
    }
    @media (min-width: 350px) {
        width: 100px;
    }
    @media (min-width: 768px) {
        width: 200px;
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
const BurgerDiv = styled.div`
    &:hover span {
        opacity: 0.5;
    }
`;
