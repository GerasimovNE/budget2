import React from 'react';
import {
    $cost,
    $name,
    $type,
    setCost,
    setName,
    setType,
    $description,
    setDescription,
    $deadlineCheckbox,
    deadlineToggle,
    $isOpenCreateModal,
    createInvoiceEvent,
    $repeatCheckbox,
    repeatToggle,
    $repeat,
    setRepeat,
    $deadline,
    setDeadline,
    $status,
    setStatus,
    createModalToggle,
} from '../../modal';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Input, Button, TextArea, Radio, CheckBox, Accordion } from '@/ui';
import useCloseModalOnClick from '@/hooks/closeModalOnClick';

export const InvoiceCreateModal = () => {
    const isOpen = useStore($isOpenCreateModal);
    const name = useStore($name);
    const cost = useStore($cost);
    const type = useStore($type);
    const description = useStore($description);
    const deadlineCheckbox = useStore($deadlineCheckbox);
    const deadline = useStore($deadline);
    const repeat = useStore($repeat);
    const repeatCheckbox = useStore($repeatCheckbox);
    const status = useStore($status);

    const radioLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];

    const repeadLabels = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
        { label: 'yearly', value: 'yearly' },
    ];

    const statusLabels = [
        { label: 'active', value: 'active' },
        { label: 'complite', value: 'complited' },
        { label: 'aborted', value: 'aborted' },
    ];

    const closeRef = React.useRef(null);

    useCloseModalOnClick(
        isOpen,
        closeRef,
        () => {
            createModalToggle();
        },
        'create'
    );
    return (
        <Container ref={closeRef} isOpen={isOpen}>
            <Input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
                placeholder="cost"
                type="number"
                value={cost}
                disabled={type == 'task'}
                onChange={(e) => setCost(e.target.value)}
            ></Input>
            <TextArea
                placeholder="description"
                maxLength={255}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></TextArea>
            <Cont50>
                <Radio
                    labels={radioLabels}
                    name="types"
                    value={type}
                    setter={setType}
                />
            </Cont50>
            <div>Status</div>
            <Cont50>
                <Radio
                    labels={statusLabels}
                    setter={setStatus}
                    value={status}
                    name="status"
                />
            </Cont50>
            <Cont50>
                <Accordion label="Additional">
                    <CheckBoxCont>
                        deadline
                        <CheckBox
                            checked={deadlineCheckbox}
                            setter={deadlineToggle}
                        />
                    </CheckBoxCont>

                    <Input
                        type="date"
                        disabled={!deadlineCheckbox}
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <CheckBoxCont>
                        repeat
                        <CheckBox
                            checked={repeatCheckbox}
                            setter={repeatToggle}
                        />
                    </CheckBoxCont>

                    <Radio
                        disabled={!repeatCheckbox}
                        labels={repeadLabels}
                        setter={setRepeat}
                        value={repeat}
                        name="repeat"
                    />
                </Accordion>
            </Cont50>
            <Button onClick={() => createInvoiceEvent()}>add</Button>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 80px;
    flex-direction: column;
    color: var(--color-text);
    gap: 10px;
    background-color: var(--color-primary);
    border-radius: 40px;
    box-shadow: 0px 0px 5px var(--color-text);
    width: 80vw;
    min-width: 450px;
    max-width: 600px;
    padding: 20px;
    font-size: 16px;
    margin: 10px;
`;
const Cont50 = styled.div`
    width: 60%;
    min-width: fit-content;
`;
const CheckBoxCont = styled.div`
    display: flex;
    gap: 15px;
    font-size: 20px;
`;
