import React from 'react';
import { useStore } from 'effector-react';
import { $currentPage, $lastPage, setPage } from '../../model';
import styled from 'styled-components';
import {
    DoubleLeftOutlined,
    DoubleRightOutlined,
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';

export const PaginationBar = () => {
    const currentPage = useStore($currentPage);
    const lastPage = useStore($lastPage);

    return (
        <Cont>
            <NavButton disabled={currentPage == 1} onClick={() => setPage(1)}>
                <DoubleLeftOutlined />
            </NavButton>
            <NavButton
                disabled={currentPage == 1}
                onClick={() => setPage(currentPage - 1)}
            >
                <LeftOutlined />
            </NavButton>
            <div>{currentPage}</div>
            <NavButton
                disabled={currentPage == lastPage}
                onClick={() => setPage(currentPage + 1)}
            >
                <RightOutlined />
            </NavButton>
            <NavButton
                disabled={currentPage == lastPage}
                onClick={() => setPage(lastPage)}
            >
                <DoubleRightOutlined />
            </NavButton>
        </Cont>
    );
};

const NavButton = styled.button`
    background-color: var(--color-primary);
    border-radius: 40px;
    color: var(--color-text);
    border: none;
    width: 40px;
    cursor: pointer;
    &:hover {
        background-color: var(--color-hover);
    }
    &:disabled {
        color: var(--color-navButtonDis);
        background-color: var(--color-primary);
    }
`;
const Cont = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 30px;
    color: var(--color-text);
`;
