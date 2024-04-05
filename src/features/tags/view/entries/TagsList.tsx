import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { CreateTagModal, Tags } from '../containers';
import { getTagsFx, createModalToggle, deleteVisibleToggle } from '../../model';
import { DeleteOutlined } from '@ant-design/icons';

export const TagsList = () => {
    React.useEffect(() => {
        getTagsFx();
    }, []);
    return (
        <Container>
            <Tags />
            <ButtonCont>
                <Button onClick={() => deleteVisibleToggle()}>
                    <DeleteCont>
                        <DeleteOutlined />
                    </DeleteCont>
                </Button>
                <Button id="createTag" onClick={() => createModalToggle()}>
                    add
                </Button>
            </ButtonCont>
            <CreateTagModal />
        </Container>
    );
};

const ButtonCont = styled.div`
    display: flex;
    color: var(--color-text);
    margin: 12px;
    justify-content: space-between;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
    width: 100%;
    height: 100%;
    border-radius: 40px;
`;

const DeleteCont = styled.div`
    width: 33px;
`;
