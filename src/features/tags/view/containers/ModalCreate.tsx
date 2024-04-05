import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Button, Input } from '@/ui';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import {
    $isOpenCreateModal,
    createModalToggle,
    $tagName,
    setTagName,
    createTagFx,
} from '../../model';

export const CreateTagModal = () => {
    const tagName = useStore($tagName);
    const isOpen = useStore($isOpenCreateModal);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, createModalToggle, 'createTag');

    return (
        <Container isOpen={isOpen} ref={closeRef}>
            <Input
                value={tagName}
                placeholder="name"
                onChange={(e) => setTagName(e.target.value)}
            />
            <Button onClick={() => createTagFx(tagName)}>add</Button>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    flex-direction: column;
    color: var(--color-text);
    gap: 10px;
    border-radius: 40px;
    background-color: var(--color-primary);
    box-shadow: 0px 0px 5px var(--color-text);
    width: 80vw;
    min-width: 450px;
    max-width: 600px;
    padding: 20px;
    font-size: 16px;
    margin: 10px;
`;
