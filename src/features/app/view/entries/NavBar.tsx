import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui/button';
import { createModalToggle } from '@/features/invoice-create-modal/modal';
export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <div>Budget</div>

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
