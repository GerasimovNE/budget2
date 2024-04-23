import React from 'react';
import styled from 'styled-components';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';
import { useStore } from 'effector-react';
import {
    $isOpenModalChange,
    $invoice,
    setTags,
    changeInvoiceEvent,
    deleteInvoiceEvent,
} from '../../model/private';
import { changeModalToggle } from '../../model/public';
import { MainForm, LeftBottomForm } from '../containers';
import { TagsList } from '@/features/tags/view/entries';
import { Tag } from '@/interface';
import { Button } from '@/ui';

export const InvoiceChangeModal = () => {
    const isOpen = useStore($isOpenModalChange);
    const invoice = useStore($invoice);
    const closeRef = React.useRef(null);
    useCloseModalOnClick(isOpen, closeRef, changeModalToggle, `${invoice?.id}`);

    return (
        <Container ref={closeRef} isOpen={isOpen}>
            <Wrapper>
                <MainForm />
                <Cont>
                    <LeftBottomForm />
                    <TagsCont>
                        <TagsList
                            tagsSelected={invoice.tags}
                            onChangeTag={(t: Tag[]) => setTags(t)}
                        />
                    </TagsCont>
                </Cont>
            </Wrapper>
            <ButtonCont>
                <Button
                    onClick={() => {
                        changeInvoiceEvent();
                    }}
                >
                    apply
                </Button>
                <Button
                    onClick={() => {
                        deleteInvoiceEvent();
                    }}
                >
                    delete
                </Button>
            </ButtonCont>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    flex-direction: column;
    height: 86%;
    top: 84px;
    color: var(--color-text);
    border-radius: 40px;
    background-color: var(--color-primary);
    box-shadow: 0px 0px 5px var(--color-text);
    font-size: 16px;
    @media (min-width: 350px) {
        width: 330px;
    }
    @media (min-width: 768px) {
        width: 580px;
    }
`;

const TagsCont = styled.div`
    @media (min-width: 350px) {
        height: 210px;
    }
    @media (min-width: 768px) {
        height: 360px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
    height: 90%;
    @media (min-width: 350px) {
        overflow-y: scroll;
    }
    @media (min-width: 768px) {
        overflow-y: hidden;
    }
`;
const Cont = styled.div`
    display: flex;
    gap: 8px;
    @media (min-width: 350px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;
`;
