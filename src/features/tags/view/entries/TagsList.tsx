import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { CreateTagModal, Tags } from '../containers';
import { getTagsFx, createModalToggle, deleteVisibleToggle } from '../../model';
import { DeleteOutlined } from '@ant-design/icons';
import { Tag } from '@/interface';

type Props = {
    tagsSelected: Tag[];
    onChangeTag: (t: Tag[]) => void;
};

export const TagsList = ({ onChangeTag, tagsSelected }: Props) => {
    React.useEffect(() => {
        getTagsFx();
    }, []);
    return (
        <Container>
            <Tags onChangeTag={onChangeTag} tagsSelected={tagsSelected} />
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
    margin: 8px;
    justify-content: space-between;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-background);
    padding: 5px;
    height: 100%;
    border-radius: 40px;
`;

const DeleteCont = styled.div`
    width: 33px;
`;
