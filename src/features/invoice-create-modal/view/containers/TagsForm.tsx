import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { TagsList } from '@/features/tags/view/entries';
import { $tags, setTags } from '../../modal';
import { Tag } from '@/interface';

export const TagsForm = () => {
    const tags = useStore($tags);

    return (
        <Cont>
            <TagsList
                tagsSelected={tags}
                onChangeTag={(t: Tag[]) => setTags(t)}
            />
        </Cont>
    );
};

const Cont = styled.div`
    @media (min-width: 350px) {
        height: 201px;
    }
    @media (min-width: 768px) {
        height: 153px;
    }
`;
