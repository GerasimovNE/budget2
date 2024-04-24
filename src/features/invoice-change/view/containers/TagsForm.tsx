import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { TagsList } from '@/features/tags/view/entries';
import { $invoice, setTags } from '../../model/private';
import { Tag } from '@/interface';

export const TagsForm = () => {
    const invoice = useStore($invoice);

    return (
        <Cont>
            <TagsList
                tagsSelected={invoice.tags}
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
