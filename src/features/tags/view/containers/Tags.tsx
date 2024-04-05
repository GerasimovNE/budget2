import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { $isDeleteVisible, $tags, deleteTagFx } from '../../model';
import { TagElement } from '@/ui';

export const Tags = () => {
    const tags = useStore($tags);
    const isDeleteVisible = useStore($isDeleteVisible);
    return (
        <TagsContainer>
            {tags.map((tag) => (
                <TagElement key={tag.id}>
                    {tag.name}
                    <Input
                        type="checkbox"
                        // checked={
                        //     selectedTags.findIndex(
                        //         (sTag) => sTag.id == tag.id
                        //     ) > -1
                        // }
                    />
                    <DeleteLabel
                        visible={isDeleteVisible}
                        onClick={() => deleteTagFx(tag.id)}
                    >
                        <CloseCircleOutlined />
                    </DeleteLabel>
                </TagElement>
            ))}
        </TagsContainer>
    );
};

const DeleteLabel = styled.label<{ visible: boolean }>`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    cursor: pointer;
`;

const Input = styled.input`
    display: none;
`;

const TagsContainer = styled.div`
    padding: 10px;
    display: flex;

    gap: 8px;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
`;
