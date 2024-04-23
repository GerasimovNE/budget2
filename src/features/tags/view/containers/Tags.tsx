import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { $isDeleteVisible, $tags, deleteTagFx } from '../../model';
import { TagElement } from '@/ui';
import { Tag } from '@/interface';

type TagListProps = {
    tagsSelected: Tag[];
    onChangeTag: (t: Tag[]) => void;
};

export const Tags = ({ tagsSelected, onChangeTag }: TagListProps) => {
    const tags = useStore($tags);
    const isDeleteVisible = useStore($isDeleteVisible);

    const onChangeFunc = (e: boolean, tag: Tag) => {
        const t = [...tagsSelected];
        console.log(tag);
        if (e) {
            t.push(tag);
        } else {
            t.splice(
                t.findIndex((sTag) => sTag.id === tag.id),
                1
            );
        }
        onChangeTag(t);
    };

    return (
        <TagsContainer>
            {tags.map((tag) => (
                <TagElement key={tag.id}>
                    {tag.name}
                    <Input
                        type="checkbox"
                        checked={
                            tagsSelected?.find((sTag) => sTag.id == tag.id)
                                ? true
                                : false
                        }
                        onChange={(e) => onChangeFunc(e.target.checked, tag)}
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
    padding: 4px 8px;
    display: flex;

    gap: 8px;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
`;
