import React from 'react';
import styled from 'styled-components';
import { Invoice } from '@/interface';
import { Accordion, TagElement } from '@/ui';
import {
    setInvoice,
    changeModalToggle,
} from '@/features/invoice-change/model/public';

export const InvoiceItem: React.FC<Invoice> = (invoice) => {
    const ref = React.useRef(null);
    const handler = (ref: React.MutableRefObject<any>, e: EventTarget) => {
        if (!ref.current.contains(e)) {
            setInvoice(invoice);
            changeModalToggle();
        }
    };
    return (
        <Container
            id={invoice.id ? `${invoice.id}` : invoice.name}
            status={invoice.status ? invoice.status : ''}
            onClick={(e) => handler(ref, e.target)}
        >
            <TextCont>
                <div>{invoice.name}</div>
                <div>{invoice.cost}</div>
            </TextCont>
            {invoice.description ? (
                <div ref={ref}>
                    <Accordion label="description">
                        {invoice.description}
                    </Accordion>
                </div>
            ) : (
                <div ref={ref}></div>
            )}
            <TextCont>
                <H2>type:{invoice.type}</H2>
                <H2>
                    {invoice.deadline ? `deadline:${invoice.deadline}` : ''}
                </H2>
            </TextCont>

            <TagContainer>
                {invoice.tags?.map((tag) => (
                    <TagElement key={tag.id}>{tag.name}</TagElement>
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
    user-select: none;
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

const TagContainer = styled.div`
    display: flex;
    gap: 5px;
`;
