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
            <div>
                <MainForm />
                <Cont>
                    <Cont50>
                        <LeftBottomForm />
                    </Cont50>

                    <TagsList
                        tagsSelected={invoice.tags}
                        onChangeTag={(t: Tag[]) => setTags(t)}
                    />
                </Cont>
            </div>
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
    height: 81%;
    top: 78px;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color-text);
    gap: 10px;
    border-radius: 40px;
    background-color: var(--color-primary);
    box-shadow: 0px 0px 5px var(--color-text);
    width: 81vw;
    min-width: 500px;
    max-width: 600px;
    padding: 15px;
    font-size: 16px;
    margin: 10px;
`;
const Cont = styled.div`
    display: flex;
    margin-top: 18px;
    justify-content: space-around;
    height: 305px;
    gap: 10px;
`;

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Cont50 = styled.div`
    min-width: 300px;
`;
