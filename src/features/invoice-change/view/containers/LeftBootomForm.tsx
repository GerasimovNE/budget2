import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import {
    $deadlineCheckbox,
    $invoice,
    $repeatCheckbox,
    setDeadlineCheckbox,
    setRepeatCheckbox,
    setType,
    setDeadline,
    setRepeat,
    setStatus,
} from '../../model/private';
import { Accordion, CheckBox, Input, Radio } from '@/ui';

export const LeftBottomForm = () => {
    const deadlineCheckbox = useStore($deadlineCheckbox);
    const repeatCheckbox = useStore($repeatCheckbox);
    const invoice = useStore($invoice);

    const repeadLabels = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
        { label: 'yearly', value: 'yearly' },
    ];

    const radioLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];
    const statusLabels = [
        { label: 'active', value: 'active' },
        { label: 'completed', value: 'completed' },
        { label: 'aborted', value: 'aborted' },
    ];

    return (
        <Cont>
            <Radio
                labels={radioLabels}
                name="type"
                value={invoice.type}
                setter={setType}
            />
            <Radio
                labels={statusLabels}
                setter={setStatus}
                value={invoice.status}
                name="statusCh"
            />
            <Padding>
                <Accordion label="Additional">
                    <CheckBoxCont>
                        deadline
                        <CheckBox
                            cheked={deadlineCheckbox}
                            setter={setDeadlineCheckbox}
                        />
                    </CheckBoxCont>

                    <Input
                        type="date"
                        disabled={!deadlineCheckbox}
                        value={invoice.deadline ? invoice.deadline : ''}
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <CheckBoxCont>
                        repeat
                        <CheckBox
                            cheked={repeatCheckbox}
                            setter={setRepeatCheckbox}
                        />
                    </CheckBoxCont>

                    <Radio
                        disabled={!repeatCheckbox}
                        labels={repeadLabels}
                        setter={setRepeat}
                        value={
                            invoice.repeat_interval
                                ? invoice.repeat_interval
                                : 'daily'
                        }
                        name="repeat_int"
                    />
                </Accordion>
            </Padding>
        </Cont>
    );
};

const Cont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: fit-content;
`;
const CheckBoxCont = styled.div`
    display: flex;
    gap: 15px;
    font-size: 20px;
`;

const Padding = styled.div`
    padding: 10px;
`;
