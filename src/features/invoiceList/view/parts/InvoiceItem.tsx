import React from 'react';
import styled from 'styled-components';
import { Invoice } from '@/interface';
import { Accordion } from '@/ui/accordion';

export const InvoiceItem: React.FC<Invoice> = (invoice) => {
    return (
        <Container status={invoice.status ? invoice.status : ''}>
            <TextCont>
                <div>{invoice.name}</div>
                <div>{invoice.cost}</div>
            </TextCont>
            {invoice.description ? (
                <Accordion label="description">{invoice.description}</Accordion>
            ) : (
                <></>
            )}
            <TextCont>
                <H2>type:{invoice.type}</H2>
                <H2>
                    {invoice.deadline ? `deadline:${invoice.deadline}` : ''}
                </H2>
            </TextCont>

            <TagContainer>
                {invoice.tags?.map((tag) => (
                    <Tag key={tag.id}>{tag.name}</Tag>
                ))}
            </TagContainer>
        </Container>
    );
};

const Container = styled.div<{ status: string }>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 40px;
    font-size: 16px;
    width: 100%;
    color: var(--color-text);
    background-color: var(--color-background);
    box-shadow: 0px 0px 5px
        ${(props) =>
            props.status === 'active'
                ? 'var(--color-active)'
                : props.status === 'completed'
                ? 'var(--color-completed)'
                : props.status === 'aborted'
                ? 'var(--color-aborted)'
                : 'black'};

    &:hover {
        background-color: var(--color-hover);
    }
`;

const TextCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const H2 = styled.p`
    font-weight: lighter;
`;

const Tag = styled.div`
    background-color: var(--color-tag);
    padding: 5px;
    border-radius: 40px;
`;

const TagContainer = styled.div`
    display: flex;
    gap: 5px;
`;
