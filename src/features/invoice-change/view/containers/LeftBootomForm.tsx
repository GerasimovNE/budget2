import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import {
    $deadlineCheckbox,
    $invoice,
    $repeatCheckbox,
    deadlineToggle,
    repeatToggle,
    setType,
    setDeadline,
    setRepeat,
    setStatus,
    $repeatCount,
    setRepeatCount,
} from '../../model/private';
import { Accordion, CheckBox, Input, Radio } from '@/ui';

export const LeftBottomForm = () => {
    const deadlineCheckbox = useStore($deadlineCheckbox);
    const repeatCheckbox = useStore($repeatCheckbox);
    const invoice = useStore($invoice);
    const repeatCount = useStore($repeatCount);

    const repeadLabels = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
        { label: 'yearly', value: 'yearly' },
    ];

    const typeLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];
    const statusLabels = [
        { label: 'active', value: 'active' },
        { label: 'completed', value: 'completed' },
        { label: 'aborted', value: 'aborted' },
    ];
    React.useEffect(() => {
        if (invoice.deadline) {
            if (!deadlineCheckbox) {
                deadlineToggle();
            }
        } else {
            if (deadlineCheckbox) {
                deadlineToggle();
            }
        }
    }, [invoice]);
    return (
        <Cont>
            <Radio
                labels={typeLabels}
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
                    value={invoice.deadline ? invoice.deadline : '2024-04-16'}
                    onChange={(e) => setDeadline(e.target.value)}
                />

                <CheckBoxCont>
                    repeat
                    <CheckBox checked={repeatCheckbox} setter={repeatToggle} />
                    <div>count</div>
                    <ContCount>
                        <Input
                            type="number"
                            value={repeatCount}
                            disabled={!repeatCheckbox}
                            onChange={(e) =>
                                setRepeatCount(parseFloat(e.target.value))
                            }
                        />
                    </ContCount>
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
        </Cont>
    );
};

const Cont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const CheckBoxCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 15px;
    font-size: 20px;
`;

const ContCount = styled.div`
    width: 100px;
    input {
        max-width: 90px;
    }
`;
